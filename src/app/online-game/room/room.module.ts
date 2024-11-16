import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomPageRoutingModule } from './room-routing.module';

import { RoomPage } from './room.page';
import { GameDataService } from './services/game-data.service';
import { PlayerPositionService } from './services/player-position.service';
import { LobbyComponent } from './components/lobby/lobby.component';
import { GameComponent } from './components/game/game.component';
import { ChatRoomModule } from 'src/app/shared/components/chat-room/chat-room.module';
import { GameEventService } from './services/game-event.service';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomPageRoutingModule,
    ChatRoomModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    GameDataService,PlayerPositionService, GameEventService],
  declarations: [RoomPage, LobbyComponent, GameComponent]
})
export class RoomPageModule {}
