import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent  implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('gameCanvas') gameCanvas!: ElementRef;

  @Input() room: any;
  @Input() size: number = 500;
  @Input() playerList: any[] = []

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('room', this.room);
    // console.log('size', this.size);
    // console.log('playerList', this.playerList);
    if(this.size > 0){
    this.drawCanvas();
    }
  }

  ngAfterViewInit() {
    console.log('gameCanvas', this.gameCanvas);
    // redraw canvas
  // this.drawCanvas();
  
  }

  drawCanvas() {
    const canvas = this.gameCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    // const scaleFactor = this.size / 600;
    // ctx.scale(scaleFactor, scaleFactor);
    ctx.fillStyle = '#ebebd3';
    ctx.fillRect(0, 0, this.size, this.size);
  }

}
