import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Observer } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginResponse } from '../auth/model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  isTokenRefreshing: boolean = false;

  refreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<any> {
      let clone = req;
      const jwtToken = this.authService.getJwtToken();

    if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
        return next.handle(req);
    }

    if (jwtToken) {
      clone = this.addToken(req, this.authService.getJwtToken());
      return next.handle(clone).pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse
            && error.status === 403) {
            return this.handleAuthErrors(req, next);
          } else {
            return throwError(error);
          }
        }));
  
    }

    return next.handle(req);
    
  }

  handleAuthErrors(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.isTokenRefreshing) {
      this.isTokenRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((refreshTokenResponse: LoginResponse) => {
          this.isTokenRefreshing = false;
          this.refreshTokenSubject.next(refreshTokenResponse.authenticationToken);
          return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
        })
      )
    }
  }

  addToken(req: HttpRequest<any>, token: string) {
    return req.clone({
      headers: req.headers.set("Authorization",
      "Bearer " + token)
    });
  }
}
