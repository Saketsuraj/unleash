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
 * @interface CreateEnvironmentSchema
 */
export interface CreateEnvironmentSchema {
    /**
     * The name of the environment. Must be a URL-friendly string according to [RFC 3968, section 2.3](https://www.rfc-editor.org/rfc/rfc3986#section-2.3)
     * @type {string}
     * @memberof CreateEnvironmentSchema
     */
    name: string;
    /**
     * The type of environment you would like to create (i.e. development or production).
     * @type {string}
     * @memberof CreateEnvironmentSchema
     */
    type: string;
    /**
     * Newly created environments are enabled by default. Set this property to `false` to create the environment in a disabled state.
     * @type {boolean}
     * @memberof CreateEnvironmentSchema
     */
    enabled?: boolean;
    /**
     * Defines where in the list of environments to place this environment. The list uses an ascending sort, so lower numbers are shown first. You can change this value later.
     * @type {number}
     * @memberof CreateEnvironmentSchema
     */
    sortOrder?: number;
}

/**
 * Check if a given object implements the CreateEnvironmentSchema interface.
 */
export function instanceOfCreateEnvironmentSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CreateEnvironmentSchemaFromJSON(json: any): CreateEnvironmentSchema {
    return CreateEnvironmentSchemaFromJSONTyped(json, false);
}

export function CreateEnvironmentSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateEnvironmentSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'type': json['type'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'sortOrder': !exists(json, 'sortOrder') ? undefined : json['sortOrder'],
    };
}

export function CreateEnvironmentSchemaToJSON(value?: CreateEnvironmentSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'enabled': value.enabled,
        'sortOrder': value.sortOrder,
    };
}

