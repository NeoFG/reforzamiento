import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone:false
})
export class ModalPage implements OnInit {

  constructor( private ModalController: ModalController) { }

  ngOnInit() {
  }

 async mostrarModal(){

    const modal = await this.ModalController.create({
      component: ModalInfoPage
    });
    await modal.present();

  }

}
