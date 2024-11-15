import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hub } from 'aws-amplify/utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  authListener: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.listen();
  }

  ngOnDestroy(): void {
    this.authListener();
  }


  listen() {
    this.authListener = Hub.listen('auth', ({ payload }: { payload: any }) => {
      switch (payload.event) {
        case 'signedIn':
          this.router.navigate(['/dashboard']);
          console.log('user have been signedIn successfully.');
          break;
        case 'signedOut':
          console.log('user have been signedOut successfully.');
          break;
        case 'tokenRefresh':
          this.router.navigate(['/dashboard']);
          console.log('auth tokens have been refreshed.');
          break;
        case 'tokenRefresh_failure':
          console.log('failure while refreshing auth tokens.');
          break;
        case 'signInWithRedirect':
          console.log('signInWithRedirect API has successfully been resolved.');
          break;
        case 'signInWithRedirect_failure':
          console.log('failure while trying to resolve signInWithRedirect API.');
          break;
        case 'customOAuthState':
          console.info('custom state returned from CognitoHosted UI');
          break;
      }
    });
}

}