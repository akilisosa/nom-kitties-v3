import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit, OnDestroy {


  size = 10;

  room: any;  
  playerList = [];

  subscription = new Subscription();
  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.getRoom();
    this.subscribeToRoom();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async getRoom() {
    const urlSegments = this.router.url.split('/');
    let lastSegment = urlSegments[urlSegments.length - 1];
    this.room = await this.roomService.getRoomByCode(lastSegment);
    if(!this.room) {
      this.roomDoesntExist();
    } else {
    this.subscription.add(this.roomService.subscribeToRoomByID(this.room.id));
    }
  }

  subscribeToRoom() {
    this.subscription.add(this.roomService.room.subscribe((room) => {
      console.log('room', room)
      if(room) {
        this.room = room;
       // this.playerList = room.players.items;
      }
    }));
  }

  roomDoesntExist() {
    this.router.navigate(['/online-game']);
  }

  leaveRoom() {
    this.router.navigate(['/online-game']);
    }

}
