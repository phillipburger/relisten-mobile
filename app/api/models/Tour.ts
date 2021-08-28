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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Tour
 */
export interface Tour {
    /**
     * 
     * @type {number}
     * @memberof Tour
     */
    artistId: number;
    /**
     * 
     * @type {Date}
     * @memberof Tour
     */
    startDate: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof Tour
     */
    endDate: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    name: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    slug: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    upstreamIdentifier: string | null;
    /**
     * 
     * @type {string}
     * @memberof Tour
     */
    uuid: string;
    /**
     * 
     * @type {number}
     * @memberof Tour
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof Tour
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Tour
     */
    updatedAt: Date;
}

export function TourFromJSON(json: any): Tour {
    return TourFromJSONTyped(json, false);
}

export function TourFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tour {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'artistId': json['artist_id'],
        'startDate': (json['start_date'] === null ? null : new Date(json['start_date'])),
        'endDate': (json['end_date'] === null ? null : new Date(json['end_date'])),
        'name': json['name'],
        'slug': json['slug'],
        'upstreamIdentifier': json['upstream_identifier'],
        'uuid': json['uuid'],
        'id': json['id'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function TourToJSON(value?: Tour | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'artist_id': value.artistId,
        'start_date': (value.startDate === null ? null : value.startDate.toISOString()),
        'end_date': (value.endDate === null ? null : value.endDate.toISOString()),
        'name': value.name,
        'slug': value.slug,
        'upstream_identifier': value.upstreamIdentifier,
        'uuid': value.uuid,
        'id': value.id,
        'created_at': (value.createdAt.toISOString()),
        'updated_at': (value.updatedAt.toISOString()),
    };
}


