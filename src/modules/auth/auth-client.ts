import { HttpClient } from '@/client';
import * as types from './types';
import { HandlerReturn } from '@/sdk';

class AuthClient {
    constructor(private http: HttpClient) {}

    async identify(body: types.AuthIdentifyBody): Promise<HandlerReturn<types.AuthIdentifyReturn>> {
        const { identifier } = body;

        try {
            const res = await this.http.post<types.AuthIdentifyResponse>('/v1/auth/identify', { identifier });
            return { data: res.data };
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }

    async signin(body: types.AuthSigninBody): Promise<HandlerReturn<types.AuthSigninReturn>> {
        const { identifier, password } = body;

        try {
            const res = await this.http.post<types.AuthSigninResponse>('/v1/auth/signin', { identifier, password });
            return { data: res.data };
        } catch (err) {
            return { error: this.http.handleError(err) };
        }
    }
}

export { AuthClient };
