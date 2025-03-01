import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PerfilComponent } from './pages/perfil/perfil.component';
import { EstructurasComponent } from './pages/estructuras/estructuras.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: '', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'estructuras', component: EstructurasComponent },
  { path: 'documentacion', component: DocumentacionComponent },
  { path: 'usuarios', component: UsuariosComponent }/*,
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pages/home' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

