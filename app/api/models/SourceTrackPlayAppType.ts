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

/**
 * 
 * @export
 * @enum {string}
 */
export enum SourceTrackPlayAppType {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}

export function SourceTrackPlayAppTypeFromJSON(json: any): SourceTrackPlayAppType {
    return json as SourceTrackPlayAppType;
}

export function SourceTrackPlayAppTypeToJSON(value?: SourceTrackPlayAppType): any {
    return value as any;
}

