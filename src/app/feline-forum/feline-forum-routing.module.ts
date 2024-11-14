import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FelineForumPage } from './feline-forum.page';

const routes: Routes = [
  {
    path: '',
    component: FelineForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FelineForumPageRoutingModule {}
