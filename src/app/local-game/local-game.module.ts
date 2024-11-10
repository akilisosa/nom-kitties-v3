import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalGamePageRoutingModule } from './local-game-routing.module';

import { LocalGamePage } from './local-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalGamePageRoutingModule
  ],
  declarations: [LocalGamePage]
})
export class LocalGamePageModule {}
