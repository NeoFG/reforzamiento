import { DataService } from './../../services/data.service';
import { Componente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false // Aquí lo desactivas o simplemente eliminas esta línea
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor( private menuController: MenuController,
                private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
