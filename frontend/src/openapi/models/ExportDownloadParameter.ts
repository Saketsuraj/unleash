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
 * @interface ExportDownloadParameter
 */
export interface ExportDownloadParameter {
}

/**
 * Check if a given object implements the ExportDownloadParameter interface.
 */
export function instanceOfExportDownloadParameter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportDownloadParameterFromJSON(json: any): ExportDownloadParameter {
    return ExportDownloadParameterFromJSONTyped(json, false);
}

export function ExportDownloadParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportDownloadParameter {
    return json;
}

export function ExportDownloadParameterToJSON(value?: ExportDownloadParameter | null): any {
    return value;
}

