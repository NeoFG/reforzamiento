import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any = null;  // Solo un usuario
  cargando: boolean = true; // Estado de carga

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      setTimeout(() => { // Retrasa la asignación de datos por 5 segundos
        if (data.length > 0) {
          this.usuario = data[0]; // Solo el primer usuario
        }
        this.cargando = false; // Oculta el estado de carga
      }, 1000);
    });
  }
}
