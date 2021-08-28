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
 * @interface Features
 */
export interface Features {
    /**
     * 
     * @type {number}
     * @memberof Features
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    descriptions: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    eras: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    multipleSources: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    reviews: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    ratings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    tours: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    taperNotes: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    sourceInformation: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    sets: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    perShowVenues: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    perSourceVenues: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    venueCoords: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    songs: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    years: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    trackMd5s: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    reviewTitles: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    jamCharts: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    setlistDataIncomplete: boolean;
    /**
     * 
     * @type {number}
     * @memberof Features
     */
    artistId: number;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    trackNames: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    venuePastNames: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    reviewsHaveRatings: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    trackDurations: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Features
     */
    canHaveFlac: boolean;
}

export function FeaturesFromJSON(json: any): Features {
    return FeaturesFromJSONTyped(json, false);
}

export function FeaturesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Features {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'descriptions': json['descriptions'],
        'eras': json['eras'],
        'multipleSources': json['multiple_sources'],
        'reviews': json['reviews'],
        'ratings': json['ratings'],
        'tours': json['tours'],
        'taperNotes': json['taper_notes'],
        'sourceInformation': json['source_information'],
        'sets': json['sets'],
        'perShowVenues': json['per_show_venues'],
        'perSourceVenues': json['per_source_venues'],
        'venueCoords': json['venue_coords'],
        'songs': json['songs'],
        'years': json['years'],
        'trackMd5s': json['track_md5s'],
        'reviewTitles': json['review_titles'],
        'jamCharts': json['jam_charts'],
        'setlistDataIncomplete': json['setlist_data_incomplete'],
        'artistId': json['artist_id'],
        'trackNames': json['track_names'],
        'venuePastNames': json['venue_past_names'],
        'reviewsHaveRatings': json['reviews_have_ratings'],
        'trackDurations': json['track_durations'],
        'canHaveFlac': json['can_have_flac'],
    };
}

export function FeaturesToJSON(value?: Features | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'descriptions': value.descriptions,
        'eras': value.eras,
        'multiple_sources': value.multipleSources,
        'reviews': value.reviews,
        'ratings': value.ratings,
        'tours': value.tours,
        'taper_notes': value.taperNotes,
        'source_information': value.sourceInformation,
        'sets': value.sets,
        'per_show_venues': value.perShowVenues,
        'per_source_venues': value.perSourceVenues,
        'venue_coords': value.venueCoords,
        'songs': value.songs,
        'years': value.years,
        'track_md5s': value.trackMd5s,
        'review_titles': value.reviewTitles,
        'jam_charts': value.jamCharts,
        'setlist_data_incomplete': value.setlistDataIncomplete,
        'artist_id': value.artistId,
        'track_names': value.trackNames,
        'venue_past_names': value.venuePastNames,
        'reviews_have_ratings': value.reviewsHaveRatings,
        'track_durations': value.trackDurations,
        'can_have_flac': value.canHaveFlac,
    };
}


