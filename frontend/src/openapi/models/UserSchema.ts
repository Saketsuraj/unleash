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
 * @interface UserSchema
 */
export interface UserSchema {
    /**
     * 
     * @type {number}
     * @memberof UserSchema
     */
    id: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserSchema
     */
    isAPI?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSchema
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSchema
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSchema
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSchema
     */
    imageUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSchema
     */
    inviteLink?: string;
    /**
     * 
     * @type {number}
     * @memberof UserSchema
     */
    loginAttempts?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UserSchema
     */
    emailSent?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserSchema
     */
    rootRole?: number;
    /**
     * 
     * @type {Date}
     * @memberof UserSchema
     */
    seenAt?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof UserSchema
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the UserSchema interface.
 */
export function instanceOfUserSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserSchemaFromJSON(json: any): UserSchema {
    return UserSchemaFromJSONTyped(json, false);
}

export function UserSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'isAPI': !exists(json, 'isAPI') ? undefined : json['isAPI'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'inviteLink': !exists(json, 'inviteLink') ? undefined : json['inviteLink'],
        'loginAttempts': !exists(json, 'loginAttempts') ? undefined : json['loginAttempts'],
        'emailSent': !exists(json, 'emailSent') ? undefined : json['emailSent'],
        'rootRole': !exists(json, 'rootRole') ? undefined : json['rootRole'],
        'seenAt': !exists(json, 'seenAt') ? undefined : (json['seenAt'] === null ? null : new Date(json['seenAt'])),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function UserSchemaToJSON(value?: UserSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'isAPI': value.isAPI,
        'name': value.name,
        'email': value.email,
        'username': value.username,
        'imageUrl': value.imageUrl,
        'inviteLink': value.inviteLink,
        'loginAttempts': value.loginAttempts,
        'emailSent': value.emailSent,
        'rootRole': value.rootRole,
        'seenAt': value.seenAt === undefined ? undefined : (value.seenAt === null ? null : value.seenAt.toISOString()),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

