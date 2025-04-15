import { HttpClient } from '../../client';
import * as types from './types';

class AuthClient {
    constructor(private http: HttpClient) {}

    async identify(body: types.AuthIdentifyBody): Promise<types.AuthIdentifyReturn> {
        const { identifier } = body;
        const res = await this.http.post<types.AuthIdentifyResponse>('/v1/auth/identify', { identifier });
        return res.data;
    }

    async signin(body: types.AuthSigninBody): Promise<types.AuthSigninReturn> {
        const { identifier, password } = body;
        const res = await this.http.post<types.AuthSigninResponse>('/v1/auth/signin', { identifier, password });
        return res.data;
    }
}

export { AuthClient };
