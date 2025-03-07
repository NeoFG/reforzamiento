import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone:false
})
export class ModalInfoPage implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalController.dismiss();
  }

}



