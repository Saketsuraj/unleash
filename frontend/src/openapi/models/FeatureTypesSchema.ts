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
import type { FeatureTypeSchema } from './FeatureTypeSchema';
import {
    FeatureTypeSchemaFromJSON,
    FeatureTypeSchemaFromJSONTyped,
    FeatureTypeSchemaToJSON,
} from './FeatureTypeSchema';

/**
 * 
 * @export
 * @interface FeatureTypesSchema
 */
export interface FeatureTypesSchema {
    /**
     * 
     * @type {number}
     * @memberof FeatureTypesSchema
     */
    version: number;
    /**
     * 
     * @type {Array<FeatureTypeSchema>}
     * @memberof FeatureTypesSchema
     */
    types: Array<FeatureTypeSchema>;
}

/**
 * Check if a given object implements the FeatureTypesSchema interface.
 */
export function instanceOfFeatureTypesSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "types" in value;

    return isInstance;
}

export function FeatureTypesSchemaFromJSON(json: any): FeatureTypesSchema {
    return FeatureTypesSchemaFromJSONTyped(json, false);
}

export function FeatureTypesSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureTypesSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'types': ((json['types'] as Array<any>).map(FeatureTypeSchemaFromJSON)),
    };
}

export function FeatureTypesSchemaToJSON(value?: FeatureTypesSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'types': ((value.types as Array<any>).map(FeatureTypeSchemaToJSON)),
    };
}

