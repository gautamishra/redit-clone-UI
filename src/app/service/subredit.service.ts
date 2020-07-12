import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditModel } from '../model';
import { HttpClient } from '@angular/common/http';
import { APIendpoints } from '../auth/constants/api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class SubreditService {

  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>(APIendpoints.getAllSunredit);
  }
}
