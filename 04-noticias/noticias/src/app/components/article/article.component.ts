import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/interfaces';
import { IonicModule, Platform, ActionSheetController, ActionSheetButton } from '@ionic/angular';
//Importamos nuestro Social Sharing plugin 
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StorageService } from 'src/app/services/storage.service';

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
    private platform: Platform,
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private storageService: StorageService
  ) { }


  openArticle() {

    if (this.platform.is('ios') || this.platform.is('android')) {

    }
    const browser = this.iab.create(this.article.url);
    browser.show();
    return;

    window.open(this.article.url, '_blank');
  }

  async onOpenMenu() {

    const articleInFavorites = this.storageService.articleInFavorites(this.article);

    const normalBtns: ActionSheetButton[] = [
      {

        text: articleInFavorites? 'Remover favorito' : 'Favorito', 
        icon: articleInFavorites ? 'heart':'heart-outline',
        handler: () => this.onToggleFavorite()
      },
      {
        text: 'Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      }
    ]

    const shareBtn: ActionSheetButton = {
      text: 'Compartir',
      icon: 'share-outline',
      handler: () => this.onShareArticle()
    };

    if (this.platform.is('capacitor')) {
      normalBtns.unshift(shareBtn);
    }

    const actionsheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: normalBtns
    });

    

    await actionsheet.present();
  }

  onShareArticle() {
    const { title, source, url } = this.article;

    this.socialSharing.share(
      title,
      source.name,
      undefined,
      url
    );
  }

  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.article);
  }


  //onClick() {
  // console.log('El botón fue presionado');
  // }

}
