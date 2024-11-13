import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuickStartComponent } from '../shared/components/quick-start/quick-start.component';
import { QuickStartModule } from '../shared/components/quick-start/quick-start.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QuickStartModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, UserProfileComponent]
})
export class DashboardPageModule {}
