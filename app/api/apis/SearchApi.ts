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
    SearchResults,
    SearchResultsFromJSON,
    SearchResultsToJSON,
} from '../models';

export interface ApiV2SearchGetRequest {
    q?: string;
    artistId?: number;
}


/**
 */
function apiV2SearchGetRaw<T>(requestParameters: ApiV2SearchGetRequest, requestConfig: runtime.TypedQueryConfig<T, SearchResults> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.q !== undefined) {
        queryParameters['q'] = requestParameters.q;
    }


    if (requestParameters.artistId !== undefined) {
        queryParameters['artist_id'] = requestParameters.artistId;
    }

    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/search`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SearchResultsFromJSON(body), text);
    }

    return config;
}

/**
*/
export function apiV2SearchGet<T>(requestParameters: ApiV2SearchGetRequest, requestConfig?: runtime.TypedQueryConfig<T, SearchResults>): QueryConfig<T> {
    return apiV2SearchGetRaw(requestParameters, requestConfig);
}

