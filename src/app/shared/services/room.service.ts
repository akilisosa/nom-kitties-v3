import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject } from 'rxjs';
import { createRoom } from 'src/graphql/mutations';
import { roomsByPublicAndCreatedAt, roomsBySimpleCode } from 'src/graphql/queries';
import { ModelSortDirection } from 'src/API';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  room = new BehaviorSubject<any>(null);

  roomList = new BehaviorSubject<any[]>([]);


  constructor() { }

  roomShared() {
    return this.room.asObservable();
  }

  roomListShared() {
    return this.roomList.asObservable();
  }

  async getRoomByCode(code: string) {
    const client = generateClient({authMode: 'apiKey'})
    let res; 
    try {
      res = await client.graphql({
        query: roomsBySimpleCode,
        variables: {
          simpleCode: code
        }
      })
      this.room.next(res.data.roomsBySimpleCode.items[0]);
      console.log('room by code', res);
    } catch(error) {
      console.log(error);
    }
    return res;
  }

  async createNewRoom(room: any) {
    const client = generateClient({authMode: 'userPool'})
    let res;
    try {
    res = (await client.graphql({
      query: createRoom,
      variables: {
        input: room
      }
      })).data.createRoom;
      console.log('room created', res);
      this.room.next(res);
    } catch (error) {
      console.log(error);
    }

    return res;

  }
  

  async getRoomList() {
    const client = generateClient({authMode: 'apiKey'})
    let res;
    try {
      res = await client.graphql({
        query: roomsByPublicAndCreatedAt,
        variables: {
          public: 'true',
          sortDirection: ModelSortDirection.DESC,
        }
      })
      console.log('room list', res);
      this.roomList.next(res.data.roomsByPublicAndCreatedAt.items);
    } catch (error) {
      console.log(error);
    }
    return res;
  }

  
}
