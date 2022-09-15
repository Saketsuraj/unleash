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
import type { UserSchema } from './UserSchema';
import {
    UserSchemaFromJSON,
    UserSchemaFromJSONTyped,
    UserSchemaToJSON,
} from './UserSchema';

/**
 * 
 * @export
 * @interface PublicSignupTokenSchema
 */
export interface PublicSignupTokenSchema {
    /**
     * 
     * @type {string}
     * @memberof PublicSignupTokenSchema
     */
    secret: string;
    /**
     * 
     * @type {string}
     * @memberof PublicSignupTokenSchema
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof PublicSignupTokenSchema
     */
    expiresAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof PublicSignupTokenSchema
     */
    createdAt: Date;
    /**
     * 
     * @type {string}
     * @memberof PublicSignupTokenSchema
     */
    createdBy: string | null;
    /**
     * 
     * @type {Array<UserSchema>}
     * @memberof PublicSignupTokenSchema
     */
    users?: Array<UserSchema> | null;
    /**
     * 
     * @type {RoleSchema}
     * @memberof PublicSignupTokenSchema
     */
    role: RoleSchema;
}

/**
 * Check if a given object implements the PublicSignupTokenSchema interface.
 */
export function instanceOfPublicSignupTokenSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function PublicSignupTokenSchemaFromJSON(json: any): PublicSignupTokenSchema {
    return PublicSignupTokenSchemaFromJSONTyped(json, false);
}

export function PublicSignupTokenSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicSignupTokenSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secret': json['secret'],
        'name': json['name'],
        'expiresAt': (new Date(json['expiresAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'createdBy': json['createdBy'],
        'users': !exists(json, 'users') ? undefined : (json['users'] === null ? null : (json['users'] as Array<any>).map(UserSchemaFromJSON)),
        'role': RoleSchemaFromJSON(json['role']),
    };
}

export function PublicSignupTokenSchemaToJSON(value?: PublicSignupTokenSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secret': value.secret,
        'name': value.name,
        'expiresAt': (value.expiresAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'createdBy': value.createdBy,
        'users': value.users === undefined ? undefined : (value.users === null ? null : (value.users as Array<any>).map(UserSchemaToJSON)),
        'role': RoleSchemaToJSON(value.role),
    };
}

