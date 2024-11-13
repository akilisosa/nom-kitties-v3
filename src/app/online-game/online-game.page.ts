import { Component, OnInit } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-online-game',
  templateUrl: './online-game.page.html',
  styleUrls: ['./online-game.page.scss'],
})
export class OnlineGamePage implements OnInit {

  roomList: any[] = [];
  subscription = new Subscription();
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRoomList();
    this.subscribeToRoomList();
  }

  subscribeToRoomList() {
    this.subscription.add(this.roomService.roomListShared().subscribe((roomList) => {
      console.log('room list', roomList);
      this.roomList = [...roomList];
    }));
  }

  joinGame(game: any) {
    console.log('join game');
  }
  

}
