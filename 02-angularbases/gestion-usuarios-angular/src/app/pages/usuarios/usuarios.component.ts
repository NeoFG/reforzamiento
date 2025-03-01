import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  cargando: boolean = true;//Muestra estado de carga

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      setTimeout(()=> { // Retrasa la asignación de datos por 5 segundos
        this.usuarios = data;
        this.cargando = false; // Oculta el estado de carga
      }, 5000);
      this.usuarios = data;
    });
  }
}
