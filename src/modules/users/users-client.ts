import { HttpClient } from '../../client';
import { POSTUserBody, PUTUserBody, User } from './types';

class UsersClient {
    constructor(private http: HttpClient) {}

    private parse(body: any) {
        return {
            ...body,
            birth_date: body.birth_date ? new Date(body.birth_date) : null,
            created_at: new Date(body.created_at),
            updated_at: new Date(body.updated_at),
        } as User;
    }

    async create(body: POSTUserBody): Promise<User> {
        const response = await this.http.post('/v1/users', body);
        return this.parse(response.data);
    }

    async list(): Promise<User[]> {
        const response = await this.http.get(`/v1/users`);
        return response.data.map((user: any) => this.parse(user));
    }

    async get(id: string): Promise<User> {
        const response = await this.http.get(`/v1/users/${id}`);
        return this.parse(response.data);
    }

    async update(id: string, body: PUTUserBody): Promise<User> {
        const response = await this.http.put(`/v1/users/${id}`, body);
        return this.parse(response.data);
    }

    async delete(id: string): Promise<void> {
        await this.http.delete(`/v1/users/${id}`);
        return;
    }

    async updateAvatar(id: string, body: File): Promise<void> {
        const formData = new FormData();
        formData.append('avatar', body);

        await this.http.put(`/v1/users/${id}/avatar`, formData);
        return;
    }

    async removeAvatar(id: string): Promise<void> {
        await this.http.delete(`/v1/users/${id}/avatar`);
        return;
    }
}

export { UsersClient };
