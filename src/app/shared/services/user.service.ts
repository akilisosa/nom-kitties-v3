import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { generateClient } from 'aws-amplify/api';
import { createUser, updateUser } from 'src/graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new BehaviorSubject({});

  constructor() { }

  userShared() {
    return this.user.asObservable();
  }

  async save(user: any) {

    let { id, ...userToSave } = { ...user };
    if (user.id) {
      await this.updateUser(user);
    } else {
      await this.createUser(userToSave);
    }

    this.user.next(user);
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

