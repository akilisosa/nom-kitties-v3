import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-game',
  templateUrl: './local-game.page.html',
  styleUrls: ['./local-game.page.scss'],
})
export class LocalGamePage implements OnInit, OnDestroy {

  active: boolean = false;
  timer: number = 30;
  private interval: any; // Store interval reference
  isPaused: boolean = false;

  player1Score: number = 0;
  player2Score: number = 0;

  player1Color: string = '#a85c32';
  player2Color: string = '#000';

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.clearGameInterval();
  }

  @HostListener('window:keydown.space', ['$event'])
handleSpaceBar(event: KeyboardEvent) {
  event.preventDefault(); // Prevent page scrolling
  console.log('Space pressed');

  if(this.active) {
    this.pauseGame()
  } else {
    if(this.timer === 30){
 
      this.startGame()
    } else {
    this.resumeGame()
    }
  }
  // Add your spacebar logic here
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

  startGame() {
    this.active = true;
    this.timer = 30;
    this.isPaused = false;
    this.startTimer();
  }

  private startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0 && !this.isPaused) {
        this.timer--;
      } else if (this.timer === 0) {
        this.active = false;
        this.clearGameInterval();
      }
    }, 1000);
  }

  pauseGame() {
    this.isPaused = true;
    this.active = false;
  }

  resumeGame() {
    this.isPaused = false;
    this.active = true;
  }

  private clearGameInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }


}
