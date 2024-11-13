import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-quick-start',
  templateUrl: './quick-start.component.html',
  styleUrls: ['./quick-start.component.scss'],
})
export class QuickStartComponent  implements OnInit {

  view : 'quickstart' |'start' | 'join' | 'private' = 'start';

  newGameForm = new FormGroup({
    public: new FormControl(true),
    mode: new FormControl('classic'),
    rounds: new FormControl('3'),
    timeLimit: new FormControl('30'),
    players: new FormControl('4'),
    roomLimit: new FormControl('4'),
    simpleCode: new FormControl(''),
    type: new FormControl('cat')
  })

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    
  }

  generate6DigitAlphaNumericCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }


  async startGame() {
await this.roomService.createNewRoom({
      public: this.newGameForm.value.public,
      mode: this.newGameForm.value.mode,
      rounds: this.newGameForm.value.rounds,
      timeLimit: this.newGameForm.value.timeLimit,
      players: this.newGameForm.value.players,
      roomLimit: this.newGameForm.value.roomLimit,
      simpleCode: this.newGameForm.value.simpleCode,
      type: this.newGameForm.value.type
    })
    console.log('start game');
  }

  joinGame() {
    console.log('join game');
  }

  joinPrivate() {
    console.log('private game');
  }

}
