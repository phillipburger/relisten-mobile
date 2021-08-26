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

import { exists, mapValues } from '../runtime';
import {
    SlimArtist,
    SlimArtistFromJSON,
    SlimArtistToJSON,
} from './';

/**
 * 
 * @export
 * @interface TourWithSlimArtist
 */
export interface TourWithSlimArtist  {
    /**
     * 
     * @type {SlimArtist}
     * @memberof TourWithSlimArtist
     */
    slimArtist: SlimArtist;
    /**
     * 
     * @type {number}
     * @memberof TourWithSlimArtist
     */
    artistId: number;
    /**
     * 
     * @type {Date}
     * @memberof TourWithSlimArtist
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof TourWithSlimArtist
     */
    endDate: Date;
    /**
     * 
     * @type {string}
     * @memberof TourWithSlimArtist
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TourWithSlimArtist
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof TourWithSlimArtist
     */
    upstreamIdentifier: string;
    /**
     * 
     * @type {string}
     * @memberof TourWithSlimArtist
     */
    uuid: string;
    /**
     * 
     * @type {number}
     * @memberof TourWithSlimArtist
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof TourWithSlimArtist
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof TourWithSlimArtist
     */
    updatedAt: Date;
}

export function TourWithSlimArtistFromJSON(json: any): TourWithSlimArtist {
    return {
        'slimArtist': SlimArtistFromJSON(json['slim_artist']),
        'artistId': json['artist_id'],
        'startDate': new Date(json['start_date']),
        'endDate': new Date(json['end_date']),
        'name': json['name'],
        'slug': json['slug'],
        'upstreamIdentifier': json['upstream_identifier'],
        'uuid': json['uuid'],
        'id': json['id'],
        'createdAt': new Date(json['created_at']),
        'updatedAt': new Date(json['updated_at']),
    };
}

export function TourWithSlimArtistToJSON(value?: TourWithSlimArtist): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'slim_artist': SlimArtistToJSON(value.slimArtist),
        'artist_id': value.artistId,
        'start_date': value.startDate.toISOString(),
        'end_date': value.endDate.toISOString(),
        'name': value.name,
        'slug': value.slug,
        'upstream_identifier': value.upstreamIdentifier,
        'uuid': value.uuid,
        'id': value.id,
        'created_at': value.createdAt.toISOString(),
        'updated_at': value.updatedAt.toISOString(),
    };
}


