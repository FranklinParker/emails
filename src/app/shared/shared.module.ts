import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    InputComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ModalComponent
  ]
})
export class SharedModule { }
