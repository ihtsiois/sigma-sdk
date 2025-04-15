import { PublicUser } from '../users';

export type AuthUserIdentifier = string;
export type AuthUserPassword = string;
export type AuthToken = string;
export type AuthPublicUser = PublicUser & { request_setup: boolean };

export type AuthIdentifyBody = { identifier: AuthUserIdentifier };
export type AuthIdentifyResponse = { data: AuthPublicUser };
export type AuthIdentifyReturn = AuthPublicUser;

export type AuthSigninBody = { identifier: AuthUserIdentifier; password: AuthUserPassword };
export type AuthSigninResponse = { data: { token: AuthToken } };
export type AuthSigninReturn = { token: AuthToken };
