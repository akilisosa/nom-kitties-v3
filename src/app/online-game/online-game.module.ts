import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnlineGamePageRoutingModule } from './online-game-routing.module';

import { OnlineGamePage } from './online-game.page';
import { QuickStartModule } from '../shared/components/quick-start/quick-start.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickStartModule,
    OnlineGamePageRoutingModule
  ],
  declarations: [OnlineGamePage]
})
export class OnlineGamePageModule {}
