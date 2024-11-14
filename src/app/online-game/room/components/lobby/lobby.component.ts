import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { get } from 'aws-amplify/api';

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

  ctx: any;

  constructor() { 
    this.gameLoop = this.gameLoop.bind(this);
  }

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
    this. ctx = canvas.getContext('2d');
    this.ctx.fillStyle = '#ebebd3';
    this.ctx.fillRect(0, 0, this.size, this.size);
    this.gameLoop();
  }

  getScaledValue(originalValue: number): number {
    const scaleFactor = this.size / 600;
    return originalValue * scaleFactor;
}

  gameLoop() {
    const canvas = this.gameCanvas.nativeElement;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ebebd3';
    ctx.clearRect(0, 0, this.size, this.size);
  
  
    // const kittySize = this.getScaledValue(50);
    // const kittyX = this.getScaledValue(50);
    // const kittyY = this.getScaledValue(50);
    this.drawKitty(50, 50, 50, '#040607');
    requestAnimationFrame(() => this.gameLoop());
  }

  drawKitty(x: number, y: number, width: number, color: string = '#040607') {
    // Scale factor to maintain proportions

     width = this.getScaledValue(width);
     x = this.getScaledValue(x);
      y = this.getScaledValue(y);


    const scale = width / 50; // SVG viewBox is 50x50
    
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.scale(scale, scale);
  
    // Main body outline (cls-3)
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.moveTo(8.6, 1.52);
    this.ctx.bezierCurveTo(11, 1.05, 14.3, 6.83, 15.71, 8.51);
    this.ctx.bezierCurveTo(21.03, 7.84, 26.45, 7.8, 31.77, 8.51);
    this.ctx.bezierCurveTo(32.78, 7.27, 33.61, 5.86, 34.65, 4.65);
    this.ctx.bezierCurveTo(38.29, 0.4, 39.08, -0.01, 42.49, 6.12);
    this.ctx.bezierCurveTo(46.73, 13.74, 50.19, 28.3, 44.21, 35.66);
    this.ctx.bezierCurveTo(42.24, 38.08, 39.32, 39.73, 36.49, 40.93);
    this.ctx.lineTo(36.49, 44.24);
    this.ctx.bezierCurveTo(38.52, 44.19, 41.78, 44.76, 43.41, 43.69);
    this.ctx.bezierCurveTo(44.77, 42.79, 44.94, 40.64, 46.96, 40.5);
    this.ctx.bezierCurveTo(51.74, 40.17, 50.93, 47.79, 42.67, 49.69);
    this.ctx.bezierCurveTo(38.39, 49.44, 13.76, 50.02, 12.27, 49.69);
    this.ctx.bezierCurveTo(10.13, 49.22, 11.49, 42.81, 11.11, 41.05);
    this.ctx.bezierCurveTo(-1.14, 36.5, -1.51, 24.72, 1.8, 13.72);
    this.ctx.bezierCurveTo(2.45, 11.53, 6.53, 1.93, 8.6, 1.52);
    this.ctx.closePath();
    this.ctx.fill();
  
    this.ctx.restore();
  }

}
