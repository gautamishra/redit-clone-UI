export interface SignupRequestPayload {
    username: string;
    email: string;
    password: string;
}


export class SignupRequestPayloadDto implements SignupRequestPayload {
    constructor(public username:string = '' , public email: string = '' , public password: string = ''){

    }
}