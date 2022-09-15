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
import type { OverrideSchema } from './OverrideSchema';
import {
    OverrideSchemaFromJSON,
    OverrideSchemaFromJSONTyped,
    OverrideSchemaToJSON,
} from './OverrideSchema';
import type { VariantSchemaPayload } from './VariantSchemaPayload';
import {
    VariantSchemaPayloadFromJSON,
    VariantSchemaPayloadFromJSONTyped,
    VariantSchemaPayloadToJSON,
} from './VariantSchemaPayload';

/**
 * 
 * @export
 * @interface VariantSchema
 */
export interface VariantSchema {
    /**
     * 
     * @type {string}
     * @memberof VariantSchema
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof VariantSchema
     */
    weight: number;
    /**
     * 
     * @type {string}
     * @memberof VariantSchema
     */
    weightType?: string;
    /**
     * 
     * @type {string}
     * @memberof VariantSchema
     */
    stickiness?: string;
    /**
     * 
     * @type {VariantSchemaPayload}
     * @memberof VariantSchema
     */
    payload?: VariantSchemaPayload;
    /**
     * 
     * @type {Array<OverrideSchema>}
     * @memberof VariantSchema
     */
    overrides?: Array<OverrideSchema>;
}

/**
 * Check if a given object implements the VariantSchema interface.
 */
export function instanceOfVariantSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "weight" in value;

    return isInstance;
}

export function VariantSchemaFromJSON(json: any): VariantSchema {
    return VariantSchemaFromJSONTyped(json, false);
}

export function VariantSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariantSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'weight': json['weight'],
        'weightType': !exists(json, 'weightType') ? undefined : json['weightType'],
        'stickiness': !exists(json, 'stickiness') ? undefined : json['stickiness'],
        'payload': !exists(json, 'payload') ? undefined : VariantSchemaPayloadFromJSON(json['payload']),
        'overrides': !exists(json, 'overrides') ? undefined : ((json['overrides'] as Array<any>).map(OverrideSchemaFromJSON)),
    };
}

export function VariantSchemaToJSON(value?: VariantSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'weight': value.weight,
        'weightType': value.weightType,
        'stickiness': value.stickiness,
        'payload': VariantSchemaPayloadToJSON(value.payload),
        'overrides': value.overrides === undefined ? undefined : ((value.overrides as Array<any>).map(OverrideSchemaToJSON)),
    };
}

