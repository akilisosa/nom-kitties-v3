import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  async getCurrentUser() {
    return await getCurrentUser()
  }

  async loggedInRedirect() {
    let user: any;
    try {
      // import { fetchUserAttributes } from '@aws-amplify/auth';
      // user = await getCurrentUser();
      user = await fetchUserAttributes()
      return !!user;
      
  
    } catch (error) {
      console.error('Not logged in:', error);
      await this.router.navigate(['/auth']);
      return false;
    }
  }
}
