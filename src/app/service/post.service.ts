import { Injectable } from '@angular/core';
import { PostModel } from '../auth/model/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIendpoints } from '../auth/constants/api-endpoint';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(APIendpoints.getAllPost);
  }
}
