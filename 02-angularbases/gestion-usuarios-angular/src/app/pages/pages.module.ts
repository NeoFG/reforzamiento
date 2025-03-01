import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EstructurasComponent } from './estructuras/estructuras.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
// Importar el NavbarComponent
import { NavbarComponent } from '../partials/navbar/navbar.component'


@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    EstructurasComponent,
    DocumentacionComponent,
    UsuariosComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
