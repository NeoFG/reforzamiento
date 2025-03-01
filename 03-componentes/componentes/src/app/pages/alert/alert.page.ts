import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false // Aquí lo desactivas o simplemente eliminas esta línea
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  
  constructor(private alertCtrl: AlertController) { }
  
  ngOnInit() {
  }
  
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is alert message!',
      buttons: ['OK'],
    });
    
    await alert.present();
  }
  
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      subHeader: 'Subtitle',
      message: 'This is alert message!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            console.log('Alert confirmed');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
            console.log('Alert canceled');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt(){
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [

        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder2',
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder3',
        },
        {
          name: 'name3',
          type: 'url',
          value: 'http://ionicframework.com',
          placeholder: 'Favorite site ever',
        },
        {
          name:'number4',
          type: 'date',
          min: '2017-03-01',
          max: '2025-07-12',
        },
        {
          name: 'name5',
          type: 'date',
          min: '2017-03-01',
          max: '2025-07-12',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes:{
            maxlenght: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons:[
        {
          text: 'OK',
          handler: (data: any) => {
            this.handlerMessage = 'Alert confirmed';
            console.log('Alert confirmed', data);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
            console.log('Alert canceled');
          },
        },
      ]
    });

    await alert.present();
  }


}
