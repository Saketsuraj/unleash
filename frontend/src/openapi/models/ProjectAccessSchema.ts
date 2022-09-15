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
import type { GroupSchema } from './GroupSchema';
import {
    GroupSchemaFromJSON,
    GroupSchemaFromJSONTyped,
    GroupSchemaToJSON,
} from './GroupSchema';
import type { RoleSchema } from './RoleSchema';
import {
    RoleSchemaFromJSON,
    RoleSchemaFromJSONTyped,
    RoleSchemaToJSON,
} from './RoleSchema';
import type { UserWithProjectRoleSchema } from './UserWithProjectRoleSchema';
import {
    UserWithProjectRoleSchemaFromJSON,
    UserWithProjectRoleSchemaFromJSONTyped,
    UserWithProjectRoleSchemaToJSON,
} from './UserWithProjectRoleSchema';

/**
 * 
 * @export
 * @interface ProjectAccessSchema
 */
export interface ProjectAccessSchema {
    /**
     * 
     * @type {Array<GroupSchema>}
     * @memberof ProjectAccessSchema
     */
    groups: Array<GroupSchema>;
    /**
     * 
     * @type {Array<UserWithProjectRoleSchema>}
     * @memberof ProjectAccessSchema
     */
    users: Array<UserWithProjectRoleSchema>;
    /**
     * 
     * @type {Array<RoleSchema>}
     * @memberof ProjectAccessSchema
     */
    roles: Array<RoleSchema>;
}

/**
 * Check if a given object implements the ProjectAccessSchema interface.
 */
export function instanceOfProjectAccessSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "groups" in value;
    isInstance = isInstance && "users" in value;
    isInstance = isInstance && "roles" in value;

    return isInstance;
}

export function ProjectAccessSchemaFromJSON(json: any): ProjectAccessSchema {
    return ProjectAccessSchemaFromJSONTyped(json, false);
}

export function ProjectAccessSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectAccessSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groups': ((json['groups'] as Array<any>).map(GroupSchemaFromJSON)),
        'users': ((json['users'] as Array<any>).map(UserWithProjectRoleSchemaFromJSON)),
        'roles': ((json['roles'] as Array<any>).map(RoleSchemaFromJSON)),
    };
}

export function ProjectAccessSchemaToJSON(value?: ProjectAccessSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groups': ((value.groups as Array<any>).map(GroupSchemaToJSON)),
        'users': ((value.users as Array<any>).map(UserWithProjectRoleSchemaToJSON)),
        'roles': ((value.roles as Array<any>).map(RoleSchemaToJSON)),
    };
}

