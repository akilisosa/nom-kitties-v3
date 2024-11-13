import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {

  size = 10;

  room: any;  
  playerList = [];

  constructor(private roomService: RoomService, ) { }

  ngOnInit() {

  }

}
