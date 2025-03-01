import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false // Aquí lo desactivas o simplemente eliminas esta línea
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          data: {
            action: 'play',
          },
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          data: {
            action: 'favorite',
          },
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          data: {
            action: 'cancel',
          },
          handler:()=>{
            console.log('Cancel clicked');
          }
        },
      ],
    });

    await actionSheet.present();
  }


}
