import { Article, NewsResponse } from './../interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }

  getTopHeadlines():Observable<Article[]>{

    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business',{
      params:{
        apiKey: apiKey
      }
    }).pipe(
      map(({articles}) => articles)
    );
  }

  getTopHeadlinesByCategory(category: string):Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`,{
      params:{
        apiKey: apiKey
      }
    }).pipe(
      map(({articles}) => articles)
    );
  }
}
