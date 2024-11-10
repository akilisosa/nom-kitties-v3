import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalGamePage } from './local-game.page';

const routes: Routes = [
  {
    path: '',
    component: LocalGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalGamePageRoutingModule {}
