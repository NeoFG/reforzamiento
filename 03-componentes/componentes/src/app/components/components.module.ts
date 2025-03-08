import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Importamos el componente HeaderComponent
import { HeaderComponent } from './header/header.component';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  exports:[
    HeaderComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
