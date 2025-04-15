import { HttpClient } from '@/client';
import * as types from './types';

class UsersClient {
    constructor(private http: HttpClient) {}

    private parse(body: types.UserResponse): types.User {
        return {
            ...body,
            birth_date: body.birth_date ? new Date(body.birth_date) : null,
            created_at: new Date(body.created_at),
            updated_at: new Date(body.updated_at),
            contact_info: body.contact_info.map((ci) => {
                return {
                    ...ci,
                    created_at: new Date(ci.created_at),
                    updated_at: new Date(ci.updated_at),
                };
            }),
        };
    }

    async create(body: types.UserCreateBody): Promise<types.UserCreateReturn> {
        const response = await this.http.post<types.UserCreateResponse>('/v1/users', body);
        return this.parse(response.data);
    }

    async list(): Promise<types.UserListReturn> {
        const response = await this.http.get<types.UserListResponse>(`/v1/users`);
        return response.data.map((user: any) => this.parse(user));
    }

    async get(id: types.UserID): Promise<types.UserGetReturn> {
        const response = await this.http.get<types.UserGetResponse>(`/v1/users/${id}`);
        return this.parse(response.data);
    }

    async update(id: types.UserID, body: types.UserUpdateBody): Promise<types.UserUpdateReturn> {
        const response = await this.http.put<types.UserUpdateResponse>(`/v1/users/${id}`, body);
        return this.parse(response.data);
    }

    async delete(id: types.UserID): Promise<types.UserDeleteReturn> {
        await this.http.delete(`/v1/users/${id}`);
        return;
    }

    async updateAvatar(id: types.UserID, body: types.UserUpdateAvatarBody): Promise<types.UserUpdateAvatarReturn> {
        const formData = new FormData();
        formData.append('avatar', body);

        await this.http.put(`/v1/users/${id}/avatar`, formData);
        return;
    }

    async removeAvatar(id: types.UserID): Promise<types.UserRemoveAvatarReturn> {
        await this.http.delete(`/v1/users/${id}/avatar`);
        return;
    }
}

export { UsersClient };
