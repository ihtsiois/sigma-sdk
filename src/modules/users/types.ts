export type UserID = string;
export type UserActive = boolean;
export type UserInternalEmail = string;
export type UserFirstName = string;
export type UserLastName = string | null;
export type UserAvatarURL = string | null;
export type UserLegalName = string;
export type UserSocialName = string | null;
export type UserGuardianName = string | null;
export type UserBRCPF = string | null;
export type userPassport = string | null;
export type UserGender = 'MALE' | 'FEMALE' | 'NON_BINARY' | 'AGENDER' | 'GENDERQUEER' | 'TWO_SPIRIT' | 'OTHER' | null;
export type UserNationality = string | null;
export type UserMaritalStatus =
    | 'SINGLE'
    | 'MARRIED'
    | 'DIVORCED'
    | 'WIDOWED'
    | 'SEPARATED'
    | 'PARTNERED'
    | 'OTHER'
    | null;
export type UserBirthDate = Date | null;
export type UserEthnicity = 'WHITE' | 'BLACK' | 'BROWN' | 'YELLOW' | 'INDIGENOUS' | 'OTHER' | null;
export type UserAddressCode = string | null;
export type UserAddressCountry = string | null;
export type UserAddressRegion = string | null;
export type UserAddressCity = string | null;
export type UserAddressNeighborhood = string | null;
export type UserAddressStreet = string | null;
export type UserAddressNumber = string | null;
export type UserCreatedAt = Date;
export type UserUpdatedAt = Date;
export type ReadOnlyUserKeys = 'id' | 'active' | 'created_at' | 'updated_at' | 'contact_info';

export type UserContactID = string;
export type UserContactType = 'EMAIL' | 'PHONE' | 'WEBSITE';
export type UserContactValue = string;
export type UserContactCreatedAt = Date;
export type UserContactUpdatedAt = Date;

export type PublicUserFirstName = UserFirstName;
export type PublicUserAvatarURL = UserAvatarURL;

export type UserResponse = {
    id: string;
    active: boolean;
    internal_email: string;
    first_name: string;
    last_name: string | null;
    avatar_url: string | null;
    legal_name: string;
    social_name: string | null;
    guardian_name: string | null;
    br_cpf: string | null;
    passport: string | null;
    gender: UserGender;
    nationality: string | null;
    marital_status: UserMaritalStatus;
    birth_date: string | null;
    ethnicity: UserEthnicity;
    address_code: string | null;
    address_country: string | null;
    address_region: string | null;
    address_city: string | null;
    address_neighborhood: string | null;
    address_street: string | null;
    address_number: string | null;
    contact_info: UserContactInfoResponse[];
    created_at: string;
    updated_at: string;
};

export type UserContactInfoResponse = {
    id: string;
    type: UserContactType;
    value: string;
    created_at: string;
    updated_at: string;
};

export type User = {
    id: UserID;
    active: UserActive;
    internal_email: UserInternalEmail;
    first_name: UserFirstName;
    last_name: UserLastName;
    avatar_url: UserAvatarURL;
    legal_name: UserLegalName;
    social_name: UserSocialName;
    guardian_name: UserGuardianName;
    br_cpf: UserBRCPF;
    passport: userPassport;
    gender: UserGender;
    nationality: UserNationality;
    marital_status: UserMaritalStatus;
    birth_date: UserBirthDate;
    ethnicity: UserEthnicity;
    contact_info: UserContact[];
    address_code: UserAddressCode;
    address_country: UserAddressCountry;
    address_region: UserAddressRegion;
    address_city: UserAddressCity;
    address_neighborhood: UserAddressNeighborhood;
    address_street: UserAddressStreet;
    address_number: UserAddressNumber;
    created_at: UserCreatedAt;
    updated_at: UserUpdatedAt;
};

export type UserContact = {
    id: UserContactID;
    type: UserContactType;
    value: UserContactValue;
    created_at: UserContactCreatedAt;
    updated_at: UserContactUpdatedAt;
};

export type PublicUser = {
    first_name: PublicUserFirstName;
    avatar_url: PublicUserAvatarURL;
};

export type UserCreateBody = Omit<User, ReadOnlyUserKeys | 'avatar_url'>;
export type UserCreateResponse = { data: UserResponse };
export type UserCreateReturn = User;

export type UserListResponse = { data: UserResponse[] };
export type UserListReturn = User[];

export type UserGetResponse = { data: UserResponse };
export type UserGetReturn = User;

export type UserUpdateBody = Omit<Partial<User>, ReadOnlyUserKeys | 'internal_email' | 'avatar_url'>;
export type UserUpdateResponse = { data: UserResponse };
export type UserUpdateReturn = User;

export type UserDeleteReturn = null;

export type UserUpdateAvatarBody = File;
export type UserUpdateAvatarReturn = null;

export type UserRemoveAvatarReturn = null;
