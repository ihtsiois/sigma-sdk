export type UserGender = 'MALE' | 'FEMALE' | 'NON_BINARY' | 'AGENDER' | 'GENDERQUEER' | 'TWO_SPIRIT' | 'OTHER';
export type UserMaritalStatus = 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED' | 'SEPARATED' | 'PARTNERED' | 'OTHER';
export type UserEthnicity = 'WHITE' | 'BLACK' | 'BROWN' | 'YELLOW' | 'INDIGENOUS' | 'OTHER';
export type UserContactType = 'EMAIL' | 'PHONE' | 'WEBSITE';

export type ReadOnlyUserKeys = 'id' | 'active' | 'created_at' | 'updated_at' | 'contact_info';

export type User = {
    id: string;
    active: boolean;
    internal_email: string;
    first_name: string;
    last_name?: string;
    avatar_url?: string;
    legal_name: string;
    social_name?: string;
    guardian_name?: string;
    br_cpf?: string;
    passport?: string;
    gender?: UserGender;
    nationality?: string;
    marital_status?: UserMaritalStatus;
    birth_date?: Date;
    ethnicity?: UserEthnicity;
    contact_info: UserContact[];
    address_code?: string;
    address_country?: string;
    address_region?: string;
    address_city?: string;
    address_neighborhood?: string;
    address_street?: string;
    address_number?: string;
    created_at: Date;
    updated_at: Date;
};

export type UserContact = {
    id: string;
    type: UserContactType;
    value: string;
    created_at: string;
    updated_at: string;
};

export type PublicUser = {
    first_name: string;
    avatar_url: string | null;
};

export type CreateUserBody = Omit<User, ReadOnlyUserKeys | 'avatar_url'>;
export type UpdateUserBody = Omit<Partial<User>, ReadOnlyUserKeys | 'internal_email' | 'avatar_url'>;
