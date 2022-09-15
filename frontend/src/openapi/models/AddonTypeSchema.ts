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
import type { AddonParameterSchema } from './AddonParameterSchema';
import {
    AddonParameterSchemaFromJSON,
    AddonParameterSchemaFromJSONTyped,
    AddonParameterSchemaToJSON,
} from './AddonParameterSchema';
import type { TagTypeSchema } from './TagTypeSchema';
import {
    TagTypeSchemaFromJSON,
    TagTypeSchemaFromJSONTyped,
    TagTypeSchemaToJSON,
} from './TagTypeSchema';

/**
 * 
 * @export
 * @interface AddonTypeSchema
 */
export interface AddonTypeSchema {
    /**
     * 
     * @type {string}
     * @memberof AddonTypeSchema
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AddonTypeSchema
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof AddonTypeSchema
     */
    documentationUrl: string;
    /**
     * 
     * @type {string}
     * @memberof AddonTypeSchema
     */
    description: string;
    /**
     * 
     * @type {Array<TagTypeSchema>}
     * @memberof AddonTypeSchema
     */
    tagTypes?: Array<TagTypeSchema>;
    /**
     * 
     * @type {Array<AddonParameterSchema>}
     * @memberof AddonTypeSchema
     */
    parameters?: Array<AddonParameterSchema>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AddonTypeSchema
     */
    events?: Array<string>;
}

/**
 * Check if a given object implements the AddonTypeSchema interface.
 */
export function instanceOfAddonTypeSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "documentationUrl" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function AddonTypeSchemaFromJSON(json: any): AddonTypeSchema {
    return AddonTypeSchemaFromJSONTyped(json, false);
}

export function AddonTypeSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddonTypeSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'displayName': json['displayName'],
        'documentationUrl': json['documentationUrl'],
        'description': json['description'],
        'tagTypes': !exists(json, 'tagTypes') ? undefined : ((json['tagTypes'] as Array<any>).map(TagTypeSchemaFromJSON)),
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(AddonParameterSchemaFromJSON)),
        'events': !exists(json, 'events') ? undefined : json['events'],
    };
}

export function AddonTypeSchemaToJSON(value?: AddonTypeSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'displayName': value.displayName,
        'documentationUrl': value.documentationUrl,
        'description': value.description,
        'tagTypes': value.tagTypes === undefined ? undefined : ((value.tagTypes as Array<any>).map(TagTypeSchemaToJSON)),
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(AddonParameterSchemaToJSON)),
        'events': value.events,
    };
}

