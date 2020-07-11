import {environment} from './../../../environments/environment';

const baseUrl = environment.apiBaseUrl; 

export const APIendpoints  = {
    signup: baseUrl + '/api/auth/signup',
    login: baseUrl + '/api/auth/login',
    refreshToken: baseUrl + '/api/auth/refresh/token',
    getAllPost: baseUrl + '/api/posts/'
}