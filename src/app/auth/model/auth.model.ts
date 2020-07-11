export interface SignupRequestPayload {
    username: string;
    email: string;
    password: string;
}


export class SignupRequestPayloadDto implements SignupRequestPayload {
    constructor(public username:string = '' , public email: string = '' , public password: string = ''){

    }
}

export interface LoginRequestPayload {
    username: string;
    password: string;
}

export class LoginRequestPayloadDto implements LoginRequestPayload {
    constructor(public username:string = '' , public password: string = ''){

    }
}

export interface LoginResponse {
    authenticationToken: string;
    refreshToken: string;
    expiresAt: Date;
    username: string;
}