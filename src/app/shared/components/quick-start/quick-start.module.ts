import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickStartComponent } from './quick-start.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuickStartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [QuickStartComponent]
})
export class QuickStartModule { }
