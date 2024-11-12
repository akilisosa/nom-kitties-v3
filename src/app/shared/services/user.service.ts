import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { generateClient } from 'aws-amplify/api';
import { createUser, updateUser } from 'src/graphql/mutations';
import { usersByOwner } from 'src/graphql/queries';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) { }

  userShared() {
    return this.user.asObservable();
  }

  async getUser() {
    const client = generateClient({ authMode: 'userPool' });
    const owner = (await this.authService.getCurrentUser()).userId;
    console.log('owner', owner);
    let res;

    try {
      res = await client.graphql({
        query: usersByOwner,
        variables: {
          owner
        }
      })
      console.log('user', res.data.usersByOwner.items[0]);
    } catch (error) {
      console.log(error);
    }
    this.user.next(res?.data.usersByOwner.items[0]);
  }
  

  async save(user: any) {
    let { id = '', ...userToSave } = { ...user };

    let res = user;
    if (user.id) {
      res = await this.updateUser(user);
    } else {
     res = await this.createUser(userToSave);
    }
    this.user.next(res);
  }

  async updateUser(user: any) {
    const client = generateClient({ authMode: 'userPool' });
    let res;
    try {
      res = await client.graphql({
        query: updateUser,
        variables: {
          input: user
        }
      })
    } catch (error) {
      console.log(error);
    }
    return res;
  }

  async createUser(user: any) {
    const client = generateClient({ authMode: 'userPool' });
    let res;
    const owner = (await this.authService.getCurrentUser()).userId;
    user.owner = owner;
    try {
      res = await client.graphql({
        query: createUser,
        variables: {
          input: user
        }

      })
    } catch (error) {
      console.log(error);
    }
    return res;
  }



}

