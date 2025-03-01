import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EstructurasComponent } from './estructuras/estructuras.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'estructuras', component: EstructurasComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  
})
export class PagesRoutingModule { }

