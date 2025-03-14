import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  public categories: string[] =['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(){
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles =>{
      this.articles=[...articles ]
    })
  }

  segmentChanged( event:Event){

    this.selectedCategory = (event as CustomEvent).detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles =>{
      this.articles =[...articles];
      //console.log(articles);
    })
  }

  loadData(event: any) {
  this.newsService.getTopHeadlinesByCategory( this.selectedCategory, true)
  .subscribe( articles => {
   // this.articles = [...this.articles, ...articles]

    if (articles.length == this.articles.length){
      event.target.disabled = true;
      return;
    }
    this.articles = articles;
    event.target.complete();


  })
  }
}
