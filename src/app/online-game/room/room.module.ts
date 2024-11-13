import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomPageRoutingModule } from './room-routing.module';

import { RoomPage } from './room.page';
import { GameDataService } from './services/game-data.service';
import { PlayerPositionService } from './services/player-position.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomPageRoutingModule
  ],
  providers: [GameDataService, PlayerPositionService],
  declarations: [RoomPage]
})
export class RoomPageModule {}
