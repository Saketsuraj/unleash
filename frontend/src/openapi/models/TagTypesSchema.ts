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
import type { TagTypeSchema } from './TagTypeSchema';
import {
    TagTypeSchemaFromJSON,
    TagTypeSchemaFromJSONTyped,
    TagTypeSchemaToJSON,
} from './TagTypeSchema';

/**
 * 
 * @export
 * @interface TagTypesSchema
 */
export interface TagTypesSchema {
    /**
     * 
     * @type {number}
     * @memberof TagTypesSchema
     */
    version: number;
    /**
     * 
     * @type {Array<TagTypeSchema>}
     * @memberof TagTypesSchema
     */
    tagTypes: Array<TagTypeSchema>;
}

/**
 * Check if a given object implements the TagTypesSchema interface.
 */
export function instanceOfTagTypesSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "tagTypes" in value;

    return isInstance;
}

export function TagTypesSchemaFromJSON(json: any): TagTypesSchema {
    return TagTypesSchemaFromJSONTyped(json, false);
}

export function TagTypesSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagTypesSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'tagTypes': ((json['tagTypes'] as Array<any>).map(TagTypeSchemaFromJSON)),
    };
}

export function TagTypesSchemaToJSON(value?: TagTypesSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'tagTypes': ((value.tagTypes as Array<any>).map(TagTypeSchemaToJSON)),
    };
}

