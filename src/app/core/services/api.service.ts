import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoInfo } from '../models/PhotoInfo';
import { IPostModel } from '../models/IPostModel';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private basePhotoUrl = 'https://picsum.photos/';
  private basePostUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  public getPhotoList(): Observable<PhotoInfo[]> {
    return this.http
      .get<PhotoInfo[]>(this.basePhotoUrl + 'v2/list?limit=100');
  }

  public getPostList(): Observable<IPostModel[]> {
    return this.http
      .get<IPostModel[]>(this.basePostUrl);
  }
}
