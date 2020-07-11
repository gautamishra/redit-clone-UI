import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../model/sign-up.model';
import { Observable } from 'rxjs';
import { APIendpoints } from '../constants/api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.http.post(APIendpoints.signup, signupRequestPayload);
  }
}
