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
 * @interface SegmentStrategiesSchemaStrategiesInner
 */
export interface SegmentStrategiesSchemaStrategiesInner {
    /**
     * 
     * @type {string}
     * @memberof SegmentStrategiesSchemaStrategiesInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentStrategiesSchemaStrategiesInner
     */
    featureName: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentStrategiesSchemaStrategiesInner
     */
    projectId: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentStrategiesSchemaStrategiesInner
     */
    environment: string;
    /**
     * 
     * @type {string}
     * @memberof SegmentStrategiesSchemaStrategiesInner
     */
    strategyName: string;
}

/**
 * Check if a given object implements the SegmentStrategiesSchemaStrategiesInner interface.
 */
export function instanceOfSegmentStrategiesSchemaStrategiesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "featureName" in value;
    isInstance = isInstance && "projectId" in value;
    isInstance = isInstance && "environment" in value;
    isInstance = isInstance && "strategyName" in value;

    return isInstance;
}

export function SegmentStrategiesSchemaStrategiesInnerFromJSON(json: any): SegmentStrategiesSchemaStrategiesInner {
    return SegmentStrategiesSchemaStrategiesInnerFromJSONTyped(json, false);
}

export function SegmentStrategiesSchemaStrategiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SegmentStrategiesSchemaStrategiesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'featureName': json['featureName'],
        'projectId': json['projectId'],
        'environment': json['environment'],
        'strategyName': json['strategyName'],
    };
}

export function SegmentStrategiesSchemaStrategiesInnerToJSON(value?: SegmentStrategiesSchemaStrategiesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'featureName': value.featureName,
        'projectId': value.projectId,
        'environment': value.environment,
        'strategyName': value.strategyName,
    };
}

