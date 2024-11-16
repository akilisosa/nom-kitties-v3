import { Component, OnInit } from '@angular/core';
import { RoomService } from '../shared/services/room.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-game',
  templateUrl: './online-game.page.html',
  styleUrls: ['./online-game.page.scss'],
})
export class OnlineGamePage implements OnInit {

  roomList: any[] = [];
  subscription = new Subscription();
  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.roomService.getRoomList();
    this.subscribeToRoomList();
  }

  subscribeToRoomList() {
    this.subscription.add(this.roomService.roomListShared().subscribe((roomList) => {
      this.roomList = [...roomList];
    }));
  }

 async joinGame(game: any) {
  // const success =  await this.roomService.joinRoom(game.id);
  await this.router.navigate(['online-game', 'room', game.simpleCode]);
  }
  

}
