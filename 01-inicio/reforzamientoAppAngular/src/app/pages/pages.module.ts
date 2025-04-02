import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Este modulo fue creado con el comando ng g m pages/pages --flat
@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  exports:[
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
