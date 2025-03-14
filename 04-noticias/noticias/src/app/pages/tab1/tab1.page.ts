import { NewsService } from './../../services/news.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular';
import { Article } from 'src/app/interfaces';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  @ViewChild (IonInfiniteScroll, { static: true}) infiniteScroll!: IonInfiniteScroll;
  public articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.newsService.getTopHeadlines()
    .subscribe(articles => this.articles.push( ... articles ));
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory( 'business', true)
    .subscribe( articles => {

      if (articles.length == this.articles.length){
        this.infiniteScroll.disabled = true;

        return;
      }
      this.articles = articles;
      this.infiniteScroll.complete();
     // event.target.complete();


    })

    console.log(this.infiniteScroll);
    }
}
