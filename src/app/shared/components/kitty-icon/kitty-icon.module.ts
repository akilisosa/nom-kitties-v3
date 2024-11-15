import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KittyIconComponent } from './kitty-icon.component';



@NgModule({
  declarations: [
    KittyIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KittyIconComponent
  ]
})
export class KittyIconModule { }
