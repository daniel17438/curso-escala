import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionHijoRoutingModule } from './comunicacion-hijo-routing.module';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  declarations: [
    HijoComponent
  ],
  imports: [
    CommonModule,
    ComunicacionHijoRoutingModule
  ]
})
export class ComunicacionHijoModule { }
