import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

interface Collectible {
  x: number;
  y: number;
  radius: number;
  color: string;
  active: boolean;
}

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('gameCanvas') gameCanvas!: ElementRef;

  @Input() player1Color: string = 'red';
  @Input() player2Color: string = 'blue';
  @Input() active = false;
  @Input() treatsOnFloor = 3; 

  @Output() scoreChanges = new EventEmitter<{ player1Score: number, player2Score: number }>();

  player1 = {
    x: 100,
    y: 100,
    size: 50,
    width: 50,
    height: 50,
    speed: 5,
    color: 'red',
  }

  player2 = {
    x: 500,
    y: 100,
    size: 50,
    width: 50,
    height: 50,
    speed: 5,
    color: 'blue',
  }

  keys = {
    w: false,
    s: false,
    a: false,
    d: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  };

  obstacles: any[] = [
    // Example obstacles - adjust positions and sizes as needed
    { x: 200, y: 200, width: 100, height: 20, color: 'gray' },  // Horizontal wall
    { x: 400, y: 100, width: 20, height: 200, color: 'gray' },  // Vertical wall
    { x: 100, y: 400, width: 200, height: 20, color: 'gray' },  // Another wall
  ];

  ctx: any;
  canvas: any;

  collectibles: Collectible[] = [];
  player1Score = 0;
  player2Score = 0;
  readonly COLLECTIBLE_RADIUS = 10;
  readonly MAX_COLLECTIBLES = 3;




  constructor() {
    this.gameLoop = this.gameLoop.bind(this);
  }

  ngOnInit() { }

  ngOnChanges(changes: any): void {
    if (changes?.player1Color) {
      this.player1.color = changes.player1Color.currentValue;
    }
    if (changes.player2Color) {
      this.player2.color = changes.player2Color.currentValue;
    }

    if (changes.active) {
      if (changes.active.currentValue) {
        this.gameLoop();
      }
    }
  }

  // Add keyboard event listeners
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // Check if the pressed key exists in our keys object
    if (event.key in this.keys) {
      event.preventDefault(); // Prevent default browser scrolling
      this.keys[event.key as keyof typeof this.keys] = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    // Check if the released key exists in our keys object
    if (event.key in this.keys) {
      event.preventDefault();
      this.keys[event.key as keyof typeof this.keys] = false;
    }
  }

  ngAfterViewInit() {
    this.canvas = this.gameCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.gameLoop();
  }

  checkCollision(obj1: any, obj2: any): boolean {
    return (obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y);
  }

  // Check if an object collides with any obstacle
  checkObstacleCollisions(obj: any, newX: number, newY: number): boolean {
    const testObj = { x: newX, y: newY, width: obj.width, height: obj.height };
    return this.obstacles.some(obstacle => this.checkCollision(testObj, obstacle));
  }

  generateRandomPosition(): { x: number, y: number } {
    let position: any;
    let validPosition = false;

    while (!validPosition) {
      position = {
        x: Math.random() * (this.canvas.width - 2 * this.COLLECTIBLE_RADIUS) + this.COLLECTIBLE_RADIUS,
        y: Math.random() * (this.canvas.height - 2 * this.COLLECTIBLE_RADIUS) + this.COLLECTIBLE_RADIUS
      };

      // Check if position overlaps with any obstacles
      validPosition = !this.obstacles.some(obstacle =>
        position.x + this.COLLECTIBLE_RADIUS > obstacle.x &&
        position.x - this.COLLECTIBLE_RADIUS < obstacle.x + obstacle.width &&
        position.y + this.COLLECTIBLE_RADIUS > obstacle.y &&
        position.y - this.COLLECTIBLE_RADIUS < obstacle.y + obstacle.height
      );
    }

    return position;
  }

  // Add this method to spawn new collectibles
  spawnCollectible() {
    if (this.collectibles.length < this.treatsOnFloor) {
      const position = this.generateRandomPosition();
      this.collectibles.push({
        x: position.x,
        y: position.y,
        radius: this.COLLECTIBLE_RADIUS,
        color: 'yellow',
        active: true
      });
    }
  }

  checkCollectibleCollection(player: any) {
    this.collectibles.forEach(collectible => {
      if (collectible.active) {
        const dx = (player.x + player.width / 2) - collectible.x;
        const dy = (player.y + player.height / 2) - collectible.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (player.width / 2 + collectible.radius)) {
          collectible.active = false;
          if (player === this.player1) {
            this.player1Score++;
          } else {
            this.player2Score++;
          }
          
          this.scoreChanges.emit({ player1Score: this.player1Score, player2Score: this.player2Score });
          // Spawn a new collectible
          this.spawnCollectible();
        }
      }
    });
  }

  gameLoop() {



    // Calculate potential new positions
    const newP1X = this.player1.x + (this.keys.d ? this.player1.speed : (this.keys.a ? -this.player1.speed : 0));
    const newP1Y = this.player1.y + (this.keys.s ? this.player1.speed : (this.keys.w ? -this.player1.speed : 0));

    const newP2X = this.player2.x + (this.keys.ArrowRight ? this.player2.speed : (this.keys.ArrowLeft ? -this.player2.speed : 0));
    const newP2Y = this.player2.y + (this.keys.ArrowDown ? this.player2.speed : (this.keys.ArrowUp ? -this.player2.speed : 0));

    // Check player collisions and obstacles
    const p1CollidesWithObstacle = this.checkObstacleCollisions(this.player1, newP1X, newP1Y);
    const p2CollidesWithObstacle = this.checkObstacleCollisions(this.player2, newP2X, newP2Y);

    // Update player 1 position if no collisions
    if (!this.checkCollision(
      { ...this.player1, x: newP1X, y: newP1Y },
      this.player2
    ) && !p1CollidesWithObstacle) {
      this.player1.x = Math.max(0, Math.min(newP1X, this.canvas.width - this.player1.width));
      this.player1.y = Math.max(0, Math.min(newP1Y, this.canvas.height - this.player1.height));
    }

    // Update player 2 position if no collisions
    if (!this.checkCollision(
      this.player1,
      { ...this.player2, x: newP2X, y: newP2Y }
    ) && !p2CollidesWithObstacle) {
      this.player2.x = Math.max(0, Math.min(newP2X, this.canvas.width - this.player2.width));
      this.player2.y = Math.max(0, Math.min(newP2Y, this.canvas.height - this.player2.height));
    }

    // Check for collectible collection
    this.checkCollectibleCollection(this.player1);
    this.checkCollectibleCollection(this.player2);

    // Remove collected circles and spawn new ones if needed
    this.collectibles = this.collectibles.filter(c => c.active);
    while (this.collectibles.length < this.treatsOnFloor) {
      this.spawnCollectible();
    }




    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background
    this.ctx.fillStyle = 'lightgray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw obstacles
    this.obstacles.forEach(obstacle => {
      this.ctx.fillStyle = obstacle.color;
      this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    // Draw collectibles
    this.collectibles.forEach(collectible => {
      if (collectible.active) {
        this.ctx.beginPath();
        this.ctx.arc(collectible.x, collectible.y, collectible.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = collectible.color;
        this.ctx.fill();
        this.ctx.closePath();
      }
    });

    // Draw players
    this.ctx.fillStyle = this.player1.color;
   // this.ctx.fillRect(this.player1.x, this.player1.y, this.player1.width, this.player1.height);
  //  this.drawCat(this.player1.x, this.player1.y, this.player1.width, this.player1.height, this.player1.color);
    this.drawKitty(this.player1.x, this.player1.y, this.player1.width, this.player1.height, this.player1.color);

    this.ctx.fillStyle = this.player2.color;
   // this.ctx.fillRect(this.player2.x, this.player2.y, this.player2.width, this.player2.height);
   //this.drawCat(this.player2.x, this.player2.y, this.player2.width, this.player2.height, this.player2.color);
    this.drawKitty(this.player2.x, this.player2.y, this.player2.width, this.player2.height, this.player2.color);

    if(this.active) {
    requestAnimationFrame(() => this.gameLoop());
    }
  }

  
drawKitty(x: number, y: number, width: number, height: number, color: string = '#040607') {
  // Scale factor to maintain proportions
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


  drawCat(x: number, y: number, width: number, height: number, color: string) {
    // Save the current context state
    this.ctx.save();
    
    // Body
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.ellipse(x + width/2, y + height/2, width/2, height/3, 0, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Head
    this.ctx.beginPath();
    this.ctx.arc(x + width/2, y + height/3, width/3, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Ears
    this.ctx.beginPath();
    this.ctx.moveTo(x + width/3, y + height/3);
    this.ctx.lineTo(x + width/4, y + height/6);
    this.ctx.lineTo(x + width/2, y + height/3);
    this.ctx.fill();
    
    this.ctx.beginPath();
    this.ctx.moveTo(x + 2*width/3, y + height/3);
    this.ctx.lineTo(x + 3*width/4, y + height/6);
    this.ctx.lineTo(x + width/2, y + height/3);
    this.ctx.fill();
    
    // Eyes
    this.ctx.fillStyle = 'white';
    this.ctx.beginPath();
    this.ctx.arc(x + 2*width/5, y + height/3, width/10, 0, Math.PI * 2);
    this.ctx.arc(x + 3*width/5, y + height/3, width/10, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Pupils
    this.ctx.fillStyle = 'black';
    this.ctx.beginPath();
    this.ctx.arc(x + 2*width/5, y + height/3, width/20, 0, Math.PI * 2);
    this.ctx.arc(x + 3*width/5, y + height/3, width/20, 0, Math.PI * 2);
    this.ctx.fill();

    // Restore the context state
    this.ctx.restore();
  }

}
