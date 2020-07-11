import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

import { SignupRequestPayload, LoginRequestPayload, LoginResponse } from '../model/auth.model';
import { Observable } from 'rxjs';
import { APIendpoints } from '../constants/api-endpoint';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, 
    private cookieServcie: CookieService) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post(APIendpoints.signup, signupRequestPayload , {
      responseType: 'text'
    });
  }

  login(loginRequestDto: LoginRequestPayload){
    return this.http.post<LoginResponse>(APIendpoints.login, loginRequestDto)
    .pipe(
      map((data) => {
        this.cookieServcie.set('authenticationToken', data.authenticationToken);
        this.cookieServcie.set('username', data.username);
        this.cookieServcie.set('refreshToken', data.refreshToken);
        this.cookieServcie.set('expiresAt', data.expiresAt.toString());
        return true;
      })
    )
  }


  refreshToken() :Observable<LoginResponse> {
    const refreshTokenDto = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName()
    }

   return this.http.post<LoginResponse>(APIendpoints.refreshToken, refreshTokenDto)
    .pipe(  
      tap((data) => {
        this.cookieServcie.set('authenticationToken', data.authenticationToken);
        this.cookieServcie.set('expiresAt', data.expiresAt.toString()); 
      })
    )
  }

  getJwtToken(): string {
    console.log(this.cookieServcie.get('authenticationToken'));
    return this.cookieServcie.get('authenticationToken');
  }

  getRefreshToken(): string {
    return this.cookieServcie.get('refreshToken');
  }

  getUserName(): string {
    return this.cookieServcie.get('username');
  }

  getExpirationTime(): string {
    return this.cookieServcie.get('expiresAt');
  }
}
