import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionPadreRoutingModule } from './comunicacion-padre-routing.module';
import { ComunicacionPadreComponent } from './comunicacion-padre.component';


@NgModule({
  declarations: [
    ComunicacionPadreComponent
  ],
  imports: [
    CommonModule,
    ComunicacionPadreRoutingModule
  ]
})
export class ComunicacionPadreModule { }
