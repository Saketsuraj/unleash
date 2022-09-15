/* tslint:disable */
/* eslint-disable */
/**
 * Unleash API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.15.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ClientMetricsSchemaBucketTogglesValue } from './ClientMetricsSchemaBucketTogglesValue';
import {
    ClientMetricsSchemaBucketTogglesValueFromJSON,
    ClientMetricsSchemaBucketTogglesValueFromJSONTyped,
    ClientMetricsSchemaBucketTogglesValueToJSON,
} from './ClientMetricsSchemaBucketTogglesValue';

/**
 * 
 * @export
 * @interface ProxyMetricsSchemaBucket
 */
export interface ProxyMetricsSchemaBucket {
    /**
     * 
     * @type {Date}
     * @memberof ProxyMetricsSchemaBucket
     */
    start: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProxyMetricsSchemaBucket
     */
    stop: Date;
    /**
     * 
     * @type {{ [key: string]: ClientMetricsSchemaBucketTogglesValue; }}
     * @memberof ProxyMetricsSchemaBucket
     */
    toggles: { [key: string]: ClientMetricsSchemaBucketTogglesValue; };
}

/**
 * Check if a given object implements the ProxyMetricsSchemaBucket interface.
 */
export function instanceOfProxyMetricsSchemaBucket(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "start" in value;
    isInstance = isInstance && "stop" in value;
    isInstance = isInstance && "toggles" in value;

    return isInstance;
}

export function ProxyMetricsSchemaBucketFromJSON(json: any): ProxyMetricsSchemaBucket {
    return ProxyMetricsSchemaBucketFromJSONTyped(json, false);
}

export function ProxyMetricsSchemaBucketFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProxyMetricsSchemaBucket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'start': (new Date(json['start'])),
        'stop': (new Date(json['stop'])),
        'toggles': (mapValues(json['toggles'], ClientMetricsSchemaBucketTogglesValueFromJSON)),
    };
}

export function ProxyMetricsSchemaBucketToJSON(value?: ProxyMetricsSchemaBucket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start': (value.start.toISOString()),
        'stop': (value.stop.toISOString()),
        'toggles': (mapValues(value.toggles, ClientMetricsSchemaBucketTogglesValueToJSON)),
    };
}

