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
    ShowWithSources,
    ShowWithSourcesFromJSON,
    ShowWithSourcesToJSON,
    Year,
    YearFromJSON,
    YearToJSON,
    YearWithShows,
    YearWithShowsFromJSON,
    YearWithShowsToJSON,
} from '../models';

export interface ApiV2ArtistsArtistIdOrSlugYearsGetRequest {
    artistIdOrSlug: string;
}

export interface ApiV2ArtistsArtistIdOrSlugYearsYearGetRequest {
    artistIdOrSlug: string;
    year: string;
}

export interface ApiV2ArtistsArtistIdOrSlugYearsYearShowDateGetRequest {
    artistIdOrSlug: string;
    year: string;
    showDate: string;
}


/**
 */
function apiV2ArtistsArtistIdOrSlugYearsGetRaw<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugYearsGetRequest, requestConfig: runtime.TypedQueryConfig<T, Array<Year>> = {}): QueryConfig<T> {
    if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
        throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugYearsGet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/artists/{artistIdOrSlug}/years`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(YearFromJSON), text);
    }

    return config;
}

/**
*/
export function apiV2ArtistsArtistIdOrSlugYearsGet<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugYearsGetRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<Year>>): QueryConfig<T> {
    return apiV2ArtistsArtistIdOrSlugYearsGetRaw(requestParameters, requestConfig);
}

/**
 */
function apiV2ArtistsArtistIdOrSlugYearsYearGetRaw<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugYearsYearGetRequest, requestConfig: runtime.TypedQueryConfig<T, YearWithShows> = {}): QueryConfig<T> {
    if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
        throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugYearsYearGet.');
    }

    if (requestParameters.year === null || requestParameters.year === undefined) {
        throw new runtime.RequiredError('year','Required parameter requestParameters.year was null or undefined when calling apiV2ArtistsArtistIdOrSlugYearsYearGet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/artists/{artistIdOrSlug}/years/{year}`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))).replace(`{${"year"}}`, encodeURIComponent(String(requestParameters.year))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(YearWithShowsFromJSON(body), text);
    }

    return config;
}

/**
*/
export function apiV2ArtistsArtistIdOrSlugYearsYearGet<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugYearsYearGetRequest, requestConfig?: runtime.TypedQueryConfig<T, YearWithShows>): QueryConfig<T> {
    return apiV2ArtistsArtistIdOrSlugYearsYearGetRaw(requestParameters, requestConfig);
}

/**
 */
function apiV2ArtistsArtistIdOrSlugYearsYearShowDateGetRaw<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugYearsYearShowDateGetRequest, requestConfig: runtime.TypedQueryConfig<T, ShowWithSources> = {}): QueryConfig<T> {
    if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
        throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugYearsYearShowDateGet.');
    }

    if (requestParameters.year === null || requestParameters.year === undefined) {
        throw new runtime.RequiredError('year','Required parameter requestParameters.year was null or undefined when calling apiV2ArtistsArtistIdOrSlugYearsYearShowDateGet.');
    }

    if (requestParameters.showDate === null || requestParameters.showDate === undefined) {
        throw new runtime.RequiredError('showDate','Required parameter requestParameters.showDate was null or undefined when calling apiV2ArtistsArtistIdOrSlugYearsYearShowDateGet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/artists/{artistIdOrSlug}/years/{year}/{showDate}`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))).replace(`{${"year"}}`, encodeURIComponent(String(requestParameters.year))).replace(`{${"showDate"}}`, encodeURIComponent(String(requestParameters.showDate))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ShowWithSourcesFromJSON(body), text);
    }

    return config;
}

/**
*/
export function apiV2ArtistsArtistIdOrSlugYearsYearShowDateGet<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugYearsYearShowDateGetRequest, requestConfig?: runtime.TypedQueryConfig<T, ShowWithSources>): QueryConfig<T> {
    return apiV2ArtistsArtistIdOrSlugYearsYearShowDateGetRaw(requestParameters, requestConfig);
}

