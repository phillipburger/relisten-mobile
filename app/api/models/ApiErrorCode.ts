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

/**
 * 
 * @export
 * @enum {string}
 */
export enum ApiErrorCode {
    NUMBER_0 = 0,
    NUMBER_404 = 404
}

export function ApiErrorCodeFromJSON(json: any): ApiErrorCode {
    return ApiErrorCodeFromJSONTyped(json, false);
}

export function ApiErrorCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiErrorCode {
    return json as ApiErrorCode;
}

export function ApiErrorCodeToJSON(value?: ApiErrorCode | null): any {
    return value as any;
}

