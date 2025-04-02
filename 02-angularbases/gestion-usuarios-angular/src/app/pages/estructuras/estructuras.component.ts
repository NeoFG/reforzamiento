import { Component } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent {
  mostrarTexto: boolean = false;
  nombres: string[] = ['Evelyn', 'Fernando', 'Valeria'];
  opcionSeleccionada: string = '1';

  toggleTexto() {
    this.mostrarTexto = !this.mostrarTexto;
  }
}

