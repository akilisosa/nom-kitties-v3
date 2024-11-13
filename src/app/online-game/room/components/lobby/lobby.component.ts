import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent  implements OnInit {

  @Input() room: any;
  @Input() size: any;
  @Input() playerList: any[] = []

  constructor() { }

  ngOnInit() {}

}
