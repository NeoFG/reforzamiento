import { NewsService } from './../../services/news.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll!: IonInfiniteScroll;

  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log(this.infiniteScroll);
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe(articles => {
        this.articles = [...articles]
      })
  }

  segmentChanged(event: Event) {
    this.selectedCategory = (event as CustomEvent).detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe(articles => {
        this.articles = [...articles];
        //console.log(articles);
      })
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory, true)
      .subscribe(articles => {
        // this.articles = [...this.articles, ...articles]

        if (articles.length == this.articles.length) {
          this.infiniteScroll.disabled = true;
          //event.target.disabled = true;
          return;
        }
        this.articles = articles;
        this.infiniteScroll.complete();
        // event.target.complete();
      })

    console.log(this.infiniteScroll);
  }
}
