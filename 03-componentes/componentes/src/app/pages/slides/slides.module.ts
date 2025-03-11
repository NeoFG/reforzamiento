import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidesPage } from './slides.page';
import { RouterModule, Routes } from '@angular/router';
// Importa los módulos de Swiper
import { register } from 'swiper/element/bundle';
register(); // Registra los componentes de Swiper

const routes: Routes = [
  {
    path: '',
    component: SlidesPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes), // Configura las rutas hijas
  ],
  declarations: [SlidesPage], // Declara el componente
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añade el esquema para elementos personalizados
})
export class SlidesPageModule { }