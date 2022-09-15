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
import type { RoleSchema } from './RoleSchema';
import {
    RoleSchemaFromJSON,
    RoleSchemaFromJSONTyped,
    RoleSchemaToJSON,
} from './RoleSchema';

/**
 * 
 * @export
 * @interface TokenUserSchema
 */
export interface TokenUserSchema {
    /**
     * 
     * @type {number}
     * @memberof TokenUserSchema
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TokenUserSchema
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TokenUserSchema
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof TokenUserSchema
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof TokenUserSchema
     */
    createdBy: string | null;
    /**
     * 
     * @type {RoleSchema}
     * @memberof TokenUserSchema
     */
    role: RoleSchema;
}

/**
 * Check if a given object implements the TokenUserSchema interface.
 */
export function instanceOfTokenUserSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "token" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function TokenUserSchemaFromJSON(json: any): TokenUserSchema {
    return TokenUserSchemaFromJSONTyped(json, false);
}

export function TokenUserSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenUserSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'email': json['email'],
        'token': json['token'],
        'createdBy': json['createdBy'],
        'role': RoleSchemaFromJSON(json['role']),
    };
}

export function TokenUserSchemaToJSON(value?: TokenUserSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'email': value.email,
        'token': value.token,
        'createdBy': value.createdBy,
        'role': RoleSchemaToJSON(value.role),
    };
}

