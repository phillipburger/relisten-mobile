/* tslint:disable */
/* eslint-disable */
/**
 * Relisten API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    BooleanResponseEnvelope,
    BooleanResponseEnvelopeFromJSON,
    BooleanResponseEnvelopeToJSON,
    Show,
    ShowFromJSON,
    ShowToJSON,
    ShowWithArtist,
    ShowWithArtistFromJSON,
    ShowWithArtistToJSON,
    ShowWithSources,
    ShowWithSourcesFromJSON,
    ShowWithSourcesToJSON,
    SourceReview,
    SourceReviewFromJSON,
    SourceReviewToJSON,
} from '../models';

export interface ApiV2ArtistsArtistIdOrSlugShowsOnDateGetRequest {
    artistIdOrSlug: string;
    month?: number;
    day?: number;
}

export interface ApiV2ArtistsArtistIdOrSlugShowsRandomGetRequest {
    artistIdOrSlug: string;
}

export interface ApiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGetRequest {
    artistIdOrSlug: string;
    shows?: number;
    days?: number;
}

export interface ApiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGetRequest {
    artistIdOrSlug: string;
    shows?: number;
    days?: number;
}

export interface ApiV2ArtistsArtistIdOrSlugShowsShowDateGetRequest {
    artistIdOrSlug: string;
    showDate: string;
}

export interface ApiV2ArtistsArtistIdOrSlugShowsTodayGetRequest {
    artistIdOrSlug: string;
}

export interface ApiV2ArtistsArtistIdOrSlugShowsTopGetRequest {
    artistIdOrSlug: string;
    limit?: number;
}

export interface ApiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGetRequest {
    artistIdOrSlug: string;
    sourceId: number;
}

export interface ApiV2ShowsOnDateGetRequest {
    month?: number;
    day?: number;
}

export interface ApiV2ShowsRecentlyPerformedGetRequest {
    artistIds?: Array<string>;
    shows?: number;
    days?: number;
}

export interface ApiV2ShowsRecentlyUpdatedGetRequest {
    artistIds?: Array<string>;
    shows?: number;
    days?: number;
}

/**
 * 
 */
export class ShowsApi extends runtime.BaseAPI {

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsOnDateGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsOnDateGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsOnDateGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.month !== undefined) {
            queryParameters['month'] = requestParameters.month;
        }

        if (requestParameters.day !== undefined) {
            queryParameters['day'] = requestParameters.day;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/on-date`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsOnDateGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsOnDateGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsOnDateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsRandomGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRandomGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShowWithSources>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsRandomGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/random`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowWithSourcesFromJSON(jsonValue));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsRandomGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRandomGetRequest, initOverrides?: RequestInit): Promise<ShowWithSources> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsRandomGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.shows !== undefined) {
            queryParameters['shows'] = requestParameters.shows;
        }

        if (requestParameters.days !== undefined) {
            queryParameters['days'] = requestParameters.days;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/recently-performed`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsRecentlyPerformedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.shows !== undefined) {
            queryParameters['shows'] = requestParameters.shows;
        }

        if (requestParameters.days !== undefined) {
            queryParameters['days'] = requestParameters.days;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/recently-updated`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsRecentlyUpdatedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsShowDateGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsShowDateGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ShowWithSources>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsShowDateGet.');
        }

        if (requestParameters.showDate === null || requestParameters.showDate === undefined) {
            throw new runtime.RequiredError('showDate','Required parameter requestParameters.showDate was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsShowDateGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/{showDate}`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))).replace(`{${"showDate"}}`, encodeURIComponent(String(requestParameters.showDate))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShowWithSourcesFromJSON(jsonValue));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsShowDateGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsShowDateGetRequest, initOverrides?: RequestInit): Promise<ShowWithSources> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsShowDateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsTodayGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsTodayGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsTodayGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/today`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsTodayGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsTodayGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsTodayGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsTopGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsTopGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Show>>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsTopGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/shows/top`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowFromJSON));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugShowsTopGet(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsTopGetRequest, initOverrides?: RequestInit): Promise<Array<Show>> {
        const response = await this.apiV2ArtistsArtistIdOrSlugShowsTopGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGetRaw(requestParameters: ApiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SourceReview>>> {
        if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
            throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGet.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling apiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/artists/{artistIdOrSlug}/sources/{sourceId}/reviews`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SourceReviewFromJSON));
    }

    /**
     */
    async apiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGet(requestParameters: ApiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGetRequest, initOverrides?: RequestInit): Promise<Array<SourceReview>> {
        const response = await this.apiV2ArtistsArtistIdOrSlugSourcesSourceIdReviewsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ShowsOnDateGetRaw(requestParameters: ApiV2ShowsOnDateGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        const queryParameters: any = {};

        if (requestParameters.month !== undefined) {
            queryParameters['month'] = requestParameters.month;
        }

        if (requestParameters.day !== undefined) {
            queryParameters['day'] = requestParameters.day;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/shows/on-date`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ShowsOnDateGet(requestParameters: ApiV2ShowsOnDateGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ShowsOnDateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ShowsRecentlyPerformedGetRaw(requestParameters: ApiV2ShowsRecentlyPerformedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        const queryParameters: any = {};

        if (requestParameters.artistIds) {
            queryParameters['artistIds'] = requestParameters.artistIds;
        }

        if (requestParameters.shows !== undefined) {
            queryParameters['shows'] = requestParameters.shows;
        }

        if (requestParameters.days !== undefined) {
            queryParameters['days'] = requestParameters.days;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/shows/recently-performed`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ShowsRecentlyPerformedGet(requestParameters: ApiV2ShowsRecentlyPerformedGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ShowsRecentlyPerformedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ShowsRecentlyUpdatedGetRaw(requestParameters: ApiV2ShowsRecentlyUpdatedGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        const queryParameters: any = {};

        if (requestParameters.artistIds) {
            queryParameters['artistIds'] = requestParameters.artistIds;
        }

        if (requestParameters.shows !== undefined) {
            queryParameters['shows'] = requestParameters.shows;
        }

        if (requestParameters.days !== undefined) {
            queryParameters['days'] = requestParameters.days;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/shows/recently-updated`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ShowsRecentlyUpdatedGet(requestParameters: ApiV2ShowsRecentlyUpdatedGetRequest, initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ShowsRecentlyUpdatedGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiV2ShowsTodayGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<ShowWithArtist>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v2/shows/today`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ShowWithArtistFromJSON));
    }

    /**
     */
    async apiV2ShowsTodayGet(initOverrides?: RequestInit): Promise<Array<ShowWithArtist>> {
        const response = await this.apiV2ShowsTodayGetRaw(initOverrides);
        return await response.value();
    }

}
