import { HttpClient } from '@/client';
import * as types from './types';
import { HandlerReturn } from '@/sdk';

class UsersClient {
    constructor(private http: HttpClient) {}

    private parse(body: types.UserResponse): types.User {
        return {
            ...body,
            birth_date: body.birth_date ? new Date(body.birth_date) : null,
            created_at: new Date(body.created_at),
            updated_at: new Date(body.updated_at),
            contact_info: body.contact_info.map((ci) => ({
                ...ci,
                created_at: new Date(ci.created_at),
                updated_at: new Date(ci.updated_at),
            })),
        };
    }

    async create(body: types.UserCreateBody): Promise<HandlerReturn<types.UserCreateReturn>> {
        try {
            const response = await this.http.post<types.UserCreateResponse>('/v1/users', body);
            return { data: this.parse(response.data) };
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async list(): Promise<HandlerReturn<types.UserListReturn>> {
        try {
            const response = await this.http.get<types.UserListResponse>('/v1/users');
            return { data: response.data.map((user: any) => this.parse(user)) };
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async get(id: types.UserID): Promise<HandlerReturn<types.UserGetReturn>> {
        try {
            const response = await this.http.get<types.UserGetResponse>(`/v1/users/${id}`);
            return { data: this.parse(response.data) };
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async update(id: types.UserID, body: types.UserUpdateBody): Promise<HandlerReturn<types.UserUpdateReturn>> {
        try {
            const response = await this.http.put<types.UserUpdateResponse>(`/v1/users/${id}`, body);
            return { data: this.parse(response.data) };
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async delete(id: types.UserID): Promise<HandlerReturn<types.UserDeleteReturn>> {
        try {
            await this.http.delete(`/v1/users/${id}`);
            return {};
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async updateAvatar(
        id: types.UserID,
        body: types.UserUpdateAvatarBody
    ): Promise<HandlerReturn<types.UserUpdateAvatarReturn>> {
        try {
            const formData = new FormData();
            formData.append('avatar', body);

            await this.http.put(`/v1/users/${id}/avatar`, formData);
            return {};
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async removeAvatar(id: types.UserID): Promise<HandlerReturn<types.UserRemoveAvatarReturn>> {
        try {
            await this.http.delete(`/v1/users/${id}/avatar`);
            return {};
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }
}

export { UsersClient };
