import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalGamePageRoutingModule } from './local-game-routing.module';

import { LocalGamePage } from './local-game.page';
import { GameboardModule } from '../shared/components/gameboard/gameboard.module';
import { CharacterSelectComponent } from './components/character-select/character-select.component';
import { CharacterSelect2Component } from './components/character-select2/character-select2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GameboardModule,
    LocalGamePageRoutingModule
  ],
  declarations: [LocalGamePage, CharacterSelectComponent, CharacterSelect2Component]
})
export class LocalGamePageModule {}
