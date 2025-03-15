import { Component, Input } from '@angular/core';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/interfaces';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],

})
export class ArticleComponent {

  @Input() article!: Article;
  @Input() index!: number;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform
  ) { }

  openArticle(){

  if ( this.platform.is('ios') || this.platform.is('android')) {

  }
  const browser = this.iab.create( this.article.url);
  browser.show();
  return;

   window.open(this.article.url, '_blank');
  }


  onClick() {
    console.log('El botón fue presionado');

  }

}
