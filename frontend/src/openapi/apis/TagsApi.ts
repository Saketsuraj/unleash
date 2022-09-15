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


import * as runtime from '../runtime';
import type {
  TagSchema,
  TagTypeSchema,
  TagTypesSchema,
  TagWithVersionSchema,
  TagsSchema,
  UpdateTagTypeSchema,
  ValidateTagTypeSchema,
} from '../models';
import {
    TagSchemaFromJSON,
    TagSchemaToJSON,
    TagTypeSchemaFromJSON,
    TagTypeSchemaToJSON,
    TagTypesSchemaFromJSON,
    TagTypesSchemaToJSON,
    TagWithVersionSchemaFromJSON,
    TagWithVersionSchemaToJSON,
    TagsSchemaFromJSON,
    TagsSchemaToJSON,
    UpdateTagTypeSchemaFromJSON,
    UpdateTagTypeSchemaToJSON,
    ValidateTagTypeSchemaFromJSON,
    ValidateTagTypeSchemaToJSON,
} from '../models';

export interface CreateTagRequest {
    tagSchema: TagSchema;
}

export interface CreateTagTypeRequest {
    tagTypeSchema: TagTypeSchema;
}

export interface DeleteTagRequest {
    type: string;
    value: string;
}

export interface DeleteTagTypeRequest {
    name: string;
}

export interface GetTagRequest {
    type: string;
    value: string;
}

export interface GetTagTypeRequest {
    name: string;
}

export interface GetTagsByTypeRequest {
    type: string;
}

export interface UpdateTagTypeRequest {
    name: string;
    updateTagTypeSchema: UpdateTagTypeSchema;
}

export interface ValidateTagTypeRequest {
    tagTypeSchema: TagTypeSchema;
}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI {

    /**
     */
    async createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tagSchema === null || requestParameters.tagSchema === undefined) {
            throw new runtime.RequiredError('tagSchema','Required parameter requestParameters.tagSchema was null or undefined when calling createTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagSchemaToJSON(requestParameters.tagSchema),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createTagRaw(requestParameters, initOverrides);
    }

    /**
     */
    async createTagTypeRaw(requestParameters: CreateTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagTypeSchema>> {
        if (requestParameters.tagTypeSchema === null || requestParameters.tagTypeSchema === undefined) {
            throw new runtime.RequiredError('tagTypeSchema','Required parameter requestParameters.tagTypeSchema was null or undefined when calling createTagType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tag-types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagTypeSchemaToJSON(requestParameters.tagTypeSchema),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagTypeSchemaFromJSON(jsonValue));
    }

    /**
     */
    async createTagType(requestParameters: CreateTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagTypeSchema> {
        const response = await this.createTagTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling deleteTag.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling deleteTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tags/{type}/{value}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteTag(requestParameters: DeleteTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTagRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteTagTypeRaw(requestParameters: DeleteTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling deleteTagType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tag-types/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteTagType(requestParameters: DeleteTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteTagTypeRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagWithVersionSchema>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getTag.');
        }

        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value','Required parameter requestParameters.value was null or undefined when calling getTag.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tags/{type}/{value}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))).replace(`{${"value"}}`, encodeURIComponent(String(requestParameters.value))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagWithVersionSchemaFromJSON(jsonValue));
    }

    /**
     */
    async getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagWithVersionSchema> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTagTypeRaw(requestParameters: GetTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagTypeSchema>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getTagType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tag-types/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagTypeSchemaFromJSON(jsonValue));
    }

    /**
     */
    async getTagType(requestParameters: GetTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagTypeSchema> {
        const response = await this.getTagTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getTagTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagTypesSchema>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tag-types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagTypesSchemaFromJSON(jsonValue));
    }

    /**
     */
    async getTagTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagTypesSchema> {
        const response = await this.getTagTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getTagsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagsSchema>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagsSchemaFromJSON(jsonValue));
    }

    /**
     */
    async getTags(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagsSchema> {
        const response = await this.getTagsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getTagsByTypeRaw(requestParameters: GetTagsByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagsSchema>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling getTagsByType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tags/{type}`.replace(`{${"type"}}`, encodeURIComponent(String(requestParameters.type))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagsSchemaFromJSON(jsonValue));
    }

    /**
     */
    async getTagsByType(requestParameters: GetTagsByTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagsSchema> {
        const response = await this.getTagsByTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateTagTypeRaw(requestParameters: UpdateTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling updateTagType.');
        }

        if (requestParameters.updateTagTypeSchema === null || requestParameters.updateTagTypeSchema === undefined) {
            throw new runtime.RequiredError('updateTagTypeSchema','Required parameter requestParameters.updateTagTypeSchema was null or undefined when calling updateTagType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tag-types/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateTagTypeSchemaToJSON(requestParameters.updateTagTypeSchema),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateTagType(requestParameters: UpdateTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateTagTypeRaw(requestParameters, initOverrides);
    }

    /**
     */
    async validateTagTypeRaw(requestParameters: ValidateTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ValidateTagTypeSchema>> {
        if (requestParameters.tagTypeSchema === null || requestParameters.tagTypeSchema === undefined) {
            throw new runtime.RequiredError('tagTypeSchema','Required parameter requestParameters.tagTypeSchema was null or undefined when calling validateTagType.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // apiKey authentication
        }

        const response = await this.request({
            path: `/api/admin/tag-types/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagTypeSchemaToJSON(requestParameters.tagTypeSchema),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ValidateTagTypeSchemaFromJSON(jsonValue));
    }

    /**
     */
    async validateTagType(requestParameters: ValidateTagTypeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ValidateTagTypeSchema> {
        const response = await this.validateTagTypeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
