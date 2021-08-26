// tslint:disable
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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    BooleanResponseEnvelope,
    BooleanResponseEnvelopeFromJSON,
    BooleanResponseEnvelopeToJSON,
    ShowWithArtist,
    ShowWithArtistFromJSON,
    ShowWithArtistToJSON,
} from '../models';

export interface ApiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGetRequest {
    artistIdOrSlug: string;
    limit?: number;
    previousDays?: number;
}

export interface ApiV2ArtistsShowsRecentlyAddedGetRequest {
    limit?: number;
}

export interface ApiV2ShowsRecentlyAddedGetRequest {
    limit?: number;
    previousDays?: number;
}


/**
 */
function apiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGetRaw<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGetRequest, requestConfig: runtime.TypedQueryConfig<T, Array<ShowWithArtist>> = {}): QueryConfig<T> {
    if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
        throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGet.');
    }

    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.limit !== undefined) {
        queryParameters['limit'] = requestParameters.limit;
    }


    if (requestParameters.previousDays !== undefined) {
        queryParameters['previousDays'] = requestParameters.previousDays;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/artists/{artistIdOrSlug}/shows/recently-added`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ShowWithArtistFromJSON), text);
    }

    return config;
}

/**
*/
export function apiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGet<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGetRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<ShowWithArtist>>): QueryConfig<T> {
    return apiV2ArtistsArtistIdOrSlugShowsRecentlyAddedGetRaw(requestParameters, requestConfig);
}

/**
 */
function apiV2ArtistsShowsRecentlyAddedGetRaw<T>(requestParameters: ApiV2ArtistsShowsRecentlyAddedGetRequest, requestConfig: runtime.TypedQueryConfig<T, Array<ShowWithArtist>> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.limit !== undefined) {
        queryParameters['limit'] = requestParameters.limit;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/artists/shows/recently-added`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ShowWithArtistFromJSON), text);
    }

    return config;
}

/**
*/
export function apiV2ArtistsShowsRecentlyAddedGet<T>(requestParameters: ApiV2ArtistsShowsRecentlyAddedGetRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<ShowWithArtist>>): QueryConfig<T> {
    return apiV2ArtistsShowsRecentlyAddedGetRaw(requestParameters, requestConfig);
}

/**
 */
function apiV2ShowsRecentlyAddedGetRaw<T>(requestParameters: ApiV2ShowsRecentlyAddedGetRequest, requestConfig: runtime.TypedQueryConfig<T, Array<ShowWithArtist>> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.limit !== undefined) {
        queryParameters['limit'] = requestParameters.limit;
    }


    if (requestParameters.previousDays !== undefined) {
        queryParameters['previousDays'] = requestParameters.previousDays;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/shows/recently-added`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(ShowWithArtistFromJSON), text);
    }

    return config;
}

/**
*/
export function apiV2ShowsRecentlyAddedGet<T>(requestParameters: ApiV2ShowsRecentlyAddedGetRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<ShowWithArtist>>): QueryConfig<T> {
    return apiV2ShowsRecentlyAddedGetRaw(requestParameters, requestConfig);
}

