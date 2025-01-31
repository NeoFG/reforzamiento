import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {}

  getPosts(): Observable<any> {
    // Palabra reservada this para acceder a las varbles globales en este caso http
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
          .pipe(
            tap(posts =>{
                console.log(posts);
            })
          );
  }
}