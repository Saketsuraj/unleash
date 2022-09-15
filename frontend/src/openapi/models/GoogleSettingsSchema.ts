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
 * @interface GoogleSettingsSchema
 */
export interface GoogleSettingsSchema {
    /**
     * 
     * @type {boolean}
     * @memberof GoogleSettingsSchema
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GoogleSettingsSchema
     */
    clientId: string;
    /**
     * 
     * @type {string}
     * @memberof GoogleSettingsSchema
     */
    clientSecret: string;
    /**
     * 
     * @type {string}
     * @memberof GoogleSettingsSchema
     */
    unleashHostname: string;
    /**
     * 
     * @type {boolean}
     * @memberof GoogleSettingsSchema
     */
    autoCreate?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GoogleSettingsSchema
     */
    emailDomains?: string;
}

/**
 * Check if a given object implements the GoogleSettingsSchema interface.
 */
export function instanceOfGoogleSettingsSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clientId" in value;
    isInstance = isInstance && "clientSecret" in value;
    isInstance = isInstance && "unleashHostname" in value;

    return isInstance;
}

export function GoogleSettingsSchemaFromJSON(json: any): GoogleSettingsSchema {
    return GoogleSettingsSchemaFromJSONTyped(json, false);
}

export function GoogleSettingsSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleSettingsSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'clientId': json['clientId'],
        'clientSecret': json['clientSecret'],
        'unleashHostname': json['unleashHostname'],
        'autoCreate': !exists(json, 'autoCreate') ? undefined : json['autoCreate'],
        'emailDomains': !exists(json, 'emailDomains') ? undefined : json['emailDomains'],
    };
}

export function GoogleSettingsSchemaToJSON(value?: GoogleSettingsSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'clientId': value.clientId,
        'clientSecret': value.clientSecret,
        'unleashHostname': value.unleashHostname,
        'autoCreate': value.autoCreate,
        'emailDomains': value.emailDomains,
    };
}

