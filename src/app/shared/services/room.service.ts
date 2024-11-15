import { Injectable } from '@angular/core';
import { generateClient } from 'aws-amplify/api';
import { BehaviorSubject } from 'rxjs';
import { createRoom } from 'src/graphQLSlim/slim-mutations';
import { roomsByPublicAndCreatedAt, roomsBySimpleCode } from 'src/graphql/queries';
import { CreateRoomInput, ModelSortDirection, RoomStatus } from 'src/API';
import { onUpdateRoom } from 'src/graphql/subscriptions';
import { deleteRoom, joinRoom } from 'src/graphql/mutations';

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

  subscribeToRoomByID(id: any) {
    const client = generateClient({authMode: 'apiKey'})
    let res;
    try {
      client.graphql({
        query: onUpdateRoom,
        variables: {
          owner: id

      }
    }).subscribe({
        next: (event) => {
          console.log(event);
          this.room.next(event.data.onUpdateRoom);
        },
        error: (error) => {
          console.log(error);
        }
      })
    } catch(error) {
      console.log(error);
    }
  }

  async getRoomByCode(code: string) {
    const client = generateClient({authMode: 'apiKey'})
    let res; 
    try {
      res = (await client.graphql({
        query: roomsBySimpleCode,
        variables: {
          simpleCode: code,
          }
      })).data.roomsBySimpleCode.items[0]
      this.room.next(res);
    } catch(error) {
      console.log(error);
    }
    return res;
  }

  async createNewRoom(room: CreateRoomInput) {
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

  async deleteRoom(id: any) {
    const client = generateClient({authMode: 'userPool'})
    let res;
    try {
      res = await client.graphql({
        query:deleteRoom,
        variables: {
          input: {
            id
          }
        }
      })
      this.removeFromRoomList(id);
    } catch (error) {
      console.log(error);
    }
  }

  removeFromRoomList(id: string) {
    const currentList = this.roomList.getValue();
    const newList = currentList.filter((room) => room.id !== id);
    this.roomList.next(newList);
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
          filter: {
            status: {
              eq: RoomStatus.WAITING
            }
          }
        }
      })
      console.log('room list', res);
      this.roomList.next(res.data.roomsByPublicAndCreatedAt.items);
    } catch (error) {
      console.log(error);
    }
    return res;
  }

  async joinRoom(roomID: string){
    const client = generateClient({authMode: 'userPool'})
    let res;
    try {
      res = await client.graphql({
        query: joinRoom,
        variables: {
          roomID
        }
      })
      console.log('joinroom', res.data.joinRoom);
      this.room.next(res.data.joinRoom);
    } catch (error) {
      console.log(error);
    }

    return res;
  }

  
}
