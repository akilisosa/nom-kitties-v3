import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-game',
  templateUrl: './local-game.page.html',
  styleUrls: ['./local-game.page.scss'],
})
export class LocalGamePage implements OnInit {

  player1Score: number = 0;
  player2Score: number = 0;

  player1Color: string = '#a85c32';
  player2Color: string = '#000';

  constructor() { }

  ngOnInit() {
  }

  scoreChange(event: any) {
   this.player1Score= event.player1Score
   this.player2Score = event.player2Score
  }

  colorChange(event: any, player: string) {
    console.log(event, player);
    if (player === 'player1') {
      this.player1Color = event;
    } else if (player === 'player2') {
      this.player2Color = event;
    }

  }

}
