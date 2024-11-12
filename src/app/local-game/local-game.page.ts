import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-local-game',
  templateUrl: './local-game.page.html',
  styleUrls: ['./local-game.page.scss'],
})
export class LocalGamePage implements OnInit, OnDestroy, AfterViewInit {

  active: boolean = false;
  timer: number = 30;
  private interval: any; // Store interval reference
  isPaused: boolean = false;

  player1Score: number = 0;
  player2Score: number = 0;

  player1Color: string = '#a85c32';
  player2Color: string = '#000';

  settingsView = false;

  form = new FormGroup({
    timeLimit: new FormControl(30),
    treatsOnFloor: new FormControl(3),
  });

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnDestroy() {
    this.clearGameInterval();
  }

  @HostListener('window:keydown.space', ['$event'])
handleSpaceBar(event: KeyboardEvent) {
  event.preventDefault(); // Prevent page scrolling
  if(this.active) {
    this.pauseGame()
  } else {
    if(this.timer === 30 || this.timer < 1) {
 
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
    if (player === 'player1') {
      this.player1Color = event;
    } else if (player === 'player2') {
      this.player2Color = event;
    }

  }

   startGame() {
    this.active = true;
    this.timer = Number(this.form.controls.timeLimit.value) || 30;
    this.player1Score = 0;
    this.player2Score = 0; 
    this.isPaused = false;
    this.settingsView = false;
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
