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
 * @interface SetUiConfigSchemaFrontendSettings
 */
export interface SetUiConfigSchemaFrontendSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof SetUiConfigSchemaFrontendSettings
     */
    frontendApiOrigins: Array<string>;
}

/**
 * Check if a given object implements the SetUiConfigSchemaFrontendSettings interface.
 */
export function instanceOfSetUiConfigSchemaFrontendSettings(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "frontendApiOrigins" in value;

    return isInstance;
}

export function SetUiConfigSchemaFrontendSettingsFromJSON(json: any): SetUiConfigSchemaFrontendSettings {
    return SetUiConfigSchemaFrontendSettingsFromJSONTyped(json, false);
}

export function SetUiConfigSchemaFrontendSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetUiConfigSchemaFrontendSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'frontendApiOrigins': json['frontendApiOrigins'],
    };
}

export function SetUiConfigSchemaFrontendSettingsToJSON(value?: SetUiConfigSchemaFrontendSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'frontendApiOrigins': value.frontendApiOrigins,
    };
}

