import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { TelephonePipe } from './pipe/telephone.pipe';



@NgModule({
  declarations: [
    CpfPipe,
    TelephonePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    TelephonePipe
  ]
})
export class PipesModule { }
