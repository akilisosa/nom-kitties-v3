import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FelineForumPageRoutingModule } from './feline-forum-routing.module';

import { FelineForumPage } from './feline-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FelineForumPageRoutingModule
  ],
  declarations: [FelineForumPage]
})
export class FelineForumPageModule {}
