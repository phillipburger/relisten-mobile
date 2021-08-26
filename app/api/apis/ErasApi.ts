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
    Era,
    EraFromJSON,
    EraToJSON,
} from '../models';

export interface ApiV2ArtistsArtistIdOrSlugErasGetRequest {
    artistIdOrSlug: string;
}


/**
 */
function apiV2ArtistsArtistIdOrSlugErasGetRaw<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugErasGetRequest, requestConfig: runtime.TypedQueryConfig<T, Array<Era>> = {}): QueryConfig<T> {
    if (requestParameters.artistIdOrSlug === null || requestParameters.artistIdOrSlug === undefined) {
        throw new runtime.RequiredError('artistIdOrSlug','Required parameter requestParameters.artistIdOrSlug was null or undefined when calling apiV2ArtistsArtistIdOrSlugErasGet.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/api/v2/artists/{artistIdOrSlug}/eras`.replace(`{${"artistIdOrSlug"}}`, encodeURIComponent(String(requestParameters.artistIdOrSlug))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(body.map(EraFromJSON), text);
    }

    return config;
}

/**
*/
export function apiV2ArtistsArtistIdOrSlugErasGet<T>(requestParameters: ApiV2ArtistsArtistIdOrSlugErasGetRequest, requestConfig?: runtime.TypedQueryConfig<T, Array<Era>>): QueryConfig<T> {
    return apiV2ArtistsArtistIdOrSlugErasGetRaw(requestParameters, requestConfig);
}

