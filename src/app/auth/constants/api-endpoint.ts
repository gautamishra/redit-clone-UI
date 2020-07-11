import {environment} from './../../../environments/environment';

const baseUrl = environment.apiBaseUrl; 

export const APIendpoints  = {
    signup: baseUrl + '/api/auth/signup',
    login: baseUrl + '/api/auth/login'
}