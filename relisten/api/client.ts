import wretch, { ConfiguredMiddleware } from 'wretch';
import { log } from '../util/logging';
import { ArtistWithCounts } from './models/artist';
import { Year, YearWithShows } from './models/year';
import { ShowWithSources } from './models/source';
import dayjs from 'dayjs';
import { RelistenObject, RelistenUpdatableObject } from '@/relisten/api/models/relisten';
import { CryptoDigestAlgorithm, digestStringAsync } from 'expo-crypto';
import { realm } from '@/relisten/realm/schema';
import { UrlRequestMetadata } from '@/relisten/realm/models/url_request_metadata';
import { VenueShows } from '../realm/models/venue_repo';
import { Venue, VenueWithShowCounts, VenueWithShows } from './models/venue';

const logger = log.extend('network');

const loggingMiddleware: ConfiguredMiddleware = (next) => (url, opts) => {
  logger.info(`[api] ${opts.method} ${url}`);

  return next(url, opts);
};

function calculateEtag(objs: Array<RelistenObject & RelistenUpdatableObject>): Promise<string> {
  let str = '';

  for (const obj of objs) {
    str += obj.uuid;
    str += obj.updated_at;
  }

  return digestStringAsync(CryptoDigestAlgorithm.MD5, str);
}

export enum RelistenApiResponseType {
  Offline,
  LastRequestTooRecent,
  RequestContentsUnchanged,
  OnlineRequestCompleted,
}

export interface RelistenApiResponse<T> {
  type: RelistenApiResponseType;
  data?: T;
}

export interface RelistenApiRequestOptions {
  bypassEtagCaching?: boolean;
  bypassRateLimit?: boolean;
  bypassRequestDeduplication?: boolean;
}

export class RelistenApiClient {
  static API_BASE = 'https://api.relisten.net/api';

  private api = wretch(RelistenApiClient.API_BASE).middlewares([loggingMiddleware]);
  // TODO: wretch error handling

  private inflightRequests: Map<string, Promise<RelistenApiResponse<unknown>>> = new Map();
  private getJson<
    T extends
      | (RelistenObject & RelistenUpdatableObject)
      | Array<RelistenObject & RelistenUpdatableObject>
  >(url: string, options?: RelistenApiRequestOptions): Promise<RelistenApiResponse<T>> {
    // we only do GET requests for now
    const key = 'GET@' + url;
    const hasInFlightRequest = this.inflightRequests.has(key);

    let req: Promise<RelistenApiResponse<T>> | undefined = undefined;

    if (options?.bypassRequestDeduplication === true || !hasInFlightRequest) {
      req = this.makeJsonGetRequest(url, options);

      if (!options?.bypassRequestDeduplication) {
        req.then(() => {
          this.inflightRequests.delete(key);
        });

        this.inflightRequests.set(key, req);
      }
    } else if (hasInFlightRequest) {
      logger.info(`[dedupe] url=${url}, duplicate request found.`);
      req = this.inflightRequests.get(key) as Promise<RelistenApiResponse<T>>;
    }

    return req!;
  }

  static MIN_REQUEST_COOLDOWN_SECONDS = 1 * 60 * 60;

  private async makeJsonGetRequest<
    T extends
      | (RelistenObject & RelistenUpdatableObject)
      | Array<RelistenObject & RelistenUpdatableObject>
  >(url: string, options?: RelistenApiRequestOptions): Promise<RelistenApiResponse<T>> {
    let urlMetadata: UrlRequestMetadata | undefined = undefined;
    if (realm) {
      urlMetadata = realm.objectForPrimaryKey<UrlRequestMetadata>(UrlRequestMetadata, url);

      const msSinceLastRequest = urlMetadata
        ? Date.now() - urlMetadata.lastRequestCompletedAt.getTime()
        : undefined;

      // don't make a request more than once per hour
      if (options?.bypassRateLimit === true) {
        logger.info(
          `[rate limiting] url=${url}, making request. bypassRateLimit=${options?.bypassRateLimit}`
        );
      } else if (
        msSinceLastRequest &&
        msSinceLastRequest < RelistenApiClient.MIN_REQUEST_COOLDOWN_SECONDS * 1000
      ) {
        logger.info(
          `[rate limiting] url=${url}, skipping request. last request was too recent: ${(
            msSinceLastRequest / 1000.0
          ).toFixed(2)}s ago. (limit: ${RelistenApiClient.MIN_REQUEST_COOLDOWN_SECONDS.toFixed(2)})`
        );
        return { type: RelistenApiResponseType.LastRequestTooRecent };
      } else {
        logger.info(
          `[rate limiting] url=${url}, making request. secondsSinceLastRequest=${msSinceLastRequest}`
        );
      }
    }

    const startedAt = dayjs();
    const resp = await this.api.get(url).res();
    const j = await resp.json();

    const completedAt = new Date();
    const duration = dayjs(completedAt).diff(startedAt, 'milliseconds');

    logger.info(`[api] ${resp.status} ${duration}ms ${resp.url}`);

    const values = (Array.isArray(j) ? j : [j]) as Array<RelistenObject & RelistenUpdatableObject>;

    const etag = await calculateEtag(values);

    realm?.write(() => {
      if (urlMetadata) {
        urlMetadata.etag = etag;
        urlMetadata.lastRequestCompletedAt = completedAt;
      } else {
        realm?.create(UrlRequestMetadata, {
          url,
          etag,
          lastRequestCompletedAt: completedAt,
        });
      }
    });

    if (options?.bypassEtagCaching === true) {
      logger.info(
        `[etag] url=${url}, updating local database. bypassEtagCaching=${options?.bypassEtagCaching}`
      );
    } else if (etag === urlMetadata?.etag) {
      logger.info(`[etag] url=${resp.url}, request contents unchanged. etag=${urlMetadata?.etag}`);
      return { type: RelistenApiResponseType.RequestContentsUnchanged };
    } else {
      logger.info(
        `[etag] url=${resp.url}, updating local database; request contents changed. stored_etag=${urlMetadata?.etag}, new_etag=${etag}`
      );
    }

    return { type: RelistenApiResponseType.OnlineRequestCompleted, data: j as T };
  }

  public artists(
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<ArtistWithCounts[]>> {
    return this.getJson('/v3/artists', options);
  }

  public artist(
    artistUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<ArtistWithCounts>> {
    return this.getJson(`/v3/artists/${artistUuid}`, options);
  }

  public showWithSources(
    showUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<ShowWithSources>> {
    return this.getJson(`/v3/shows/${showUuid}`, options);
  }

  public randomShow(
    artistUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<ShowWithSources>> {
    return this.getJson(`/v2/artists/${artistUuid}/shows/random`, options);
  }

  public years(
    artistUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<Year[]>> {
    return this.getJson(`/v3/artists/${artistUuid}/years`, options);
  }

  public year(
    artistUuid: string,
    yearUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<YearWithShows>> {
    return this.getJson(`/v3/artists/${artistUuid}/years/${yearUuid}`, options);
  }

  public venues(
    artistUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<VenueWithShowCounts>> {
    return this.getJson(`/v3/artists/${artistUuid}/venues`, options);
  }

  public venue(
    artistUuid: string,
    venueUuid: string,
    options?: RelistenApiRequestOptions
  ): Promise<RelistenApiResponse<VenueWithShows>> {
    return this.getJson(`/v3/artists/${artistUuid}/venue/${venueUuid}`, options);
  }
}
