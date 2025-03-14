import { Article, NewsResponse, ArticlesByCategoryAndPage } from './../interfaces';
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

  private articlesByCategoryAndPage: ArticlesByCategoryAndPage = {}



  constructor( private http: HttpClient) { }

  private executeQuery<T>(endpoint: string): Observable<T> {
    const url = `https://newsapi.org/v2${endpoint}`;

    return this.http.get<T>(url, {
      params: {
        apiKey: apiKey
      }
    });
  }


  getTopHeadlines():Observable<Article[]>{
    console.log('Petición HTTP realizada');
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business',{
      params:{
        apiKey: apiKey
      }
    }).pipe(
      map(({articles}) => articles)
    );
  }


  getTopHeadlinesByCategory(category: string, loadMore: boolean = false):Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`,{
      params:{
        apiKey: apiKey
      }
    }).pipe(
      map(({articles}) => articles)
    );
  }

private getArticlesByCategory (category: string) : Observable<Article[]>{

  if ( Object.keys( this.articlesByCategoryAndPage).includes(category)) {
    //Ya existe
   // this.articlesByCategoryAndPage[category].page += 0;
  } else {
    //No existe
    this.articlesByCategoryAndPage[category] = {
      page : 0,
      articles: []
    }
  }

  const page = this.articlesByCategoryAndPage[category].page + 1;

  return this.executeQuery<NewsResponse>(`/top-headlines?category=${ category }&page=${ page }`)
  .pipe(
    map(({ articles }) => articles)
  );

      }

}


