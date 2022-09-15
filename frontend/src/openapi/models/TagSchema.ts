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
/**
 * 
 * @export
 * @interface TagSchema
 */
export interface TagSchema {
    /**
     * 
     * @type {string}
     * @memberof TagSchema
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof TagSchema
     */
    type: string;
}

/**
 * Check if a given object implements the TagSchema interface.
 */
export function instanceOfTagSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TagSchemaFromJSON(json: any): TagSchema {
    return TagSchemaFromJSONTyped(json, false);
}

export function TagSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'type': json['type'],
    };
}

export function TagSchemaToJSON(value?: TagSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'type': value.type,
    };
}

