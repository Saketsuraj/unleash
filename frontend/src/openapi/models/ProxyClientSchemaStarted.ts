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

/**
 * @type ProxyClientSchemaStarted
 * When this client started. Should be reported as ISO8601 time.
 * @export
 */
export type ProxyClientSchemaStarted = Date | number;

export function ProxyClientSchemaStartedFromJSON(json: any): ProxyClientSchemaStarted {
    return ProxyClientSchemaStartedFromJSONTyped(json, false);
}

export function ProxyClientSchemaStartedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProxyClientSchemaStarted {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...DateFromJSONTyped(json, true), ...numberFromJSONTyped(json, true) };
}

export function ProxyClientSchemaStartedToJSON(value?: ProxyClientSchemaStarted | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfDate(value)) {
        return DateToJSON(value as Date);
    }
    if (instanceOfnumber(value)) {
        return numberToJSON(value as number);
    }

    return {};
}

