import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    rounds: new FormControl(3),
    timeLimit: new FormControl('30'),
    players: new FormControl('4'),
    roomLimit: new FormControl(4),
    simpleCode: new FormControl(''),
    type: new FormControl('cat')
  })

  constructor() { }

  ngOnInit() {}

  generate6DigitAlphaNumericCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }


  startGame() {
    console.log('start game');
  }

  joinGame() {
    console.log('join game');
  }

  joinPrivate() {
    console.log('private game');
  }

}
