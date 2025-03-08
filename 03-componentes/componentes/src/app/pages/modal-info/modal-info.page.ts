import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone:false
})
export class ModalInfoPage implements OnInit {

  @Input() nombre!: string;
  @Input() pais!: string;

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalController.dismiss();
  }

  salirConArgumentos() {
    this.modalController.dismiss({
      nombre:'Felipe',
      pais: 'España'
    });
  }

}



