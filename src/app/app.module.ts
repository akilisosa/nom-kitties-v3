import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';


import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

const config = {...awsconfig, "API":  {
    "Events": {
      "endpoint": "https://hjzp2ynwl5ehvjn4lihvnesplm.appsync-api.us-east-1.amazonaws.com/event",
      "region": "us-east-1",
      "defaultAuthMode": "apiKey",
      "apiKey": "da2-bmfwwzhplnb4bg3vdkik62u3ba"
    }
  }
  
}

Amplify.configure({
  "API": {
    "Events": {
      "endpoint": "https://hjzp2ynwl5ehvjn4lihvnesplm.appsync-api.us-east-1.amazonaws.com/event",
      "region": "us-east-1",
      "defaultAuthMode": "apiKey",
      "apiKey": "da2-bmfwwzhplnb4bg3vdkik62u3ba"
    }
  },
  ...awsconfig,
});

@NgModule({
  declarations: [AppComponent, SideNavComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
