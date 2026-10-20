// Carsx3
// Jack Breckon
// Oct 20

let eastbound = [];
let westbound = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  drawRoad();
  for (let c of westbound){
    c.action;
  }
}

function drawRoad(){
  // Draws The road
  fill(0);
  rect(0,height/3,width,height/3);
  fill(255,255,0);
  for(let i = 0; i < 1000; i++){
    rect(50*i,height/2, 30,5);
  }
}

class Vehicle{
  constructor(type,colour,x,y,direction,xSpeed){
    this.type = type;
    this.colour = colour;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = xSpeed;
  }
  display(){
    if (type === 0){
      fill(this.colour);
      rect(this.x,this.y,30,10);
    }
    else{
      fill(this.colour);
      rect(this.x,this.y,30,10);
    }
  }
  move(){
    if (this.direction === 0){
      this.x += this.xSpeed;
    }
    else {
      this.x -= this.xSpeed;
    }
  }
  speedUp(){
    this.xSpeed += random(15);
  }
  speedDown(){
    this.xSpeed -= random(15);
  }
  changeColour(){
    this.colour = random(255),random(255),random(255);
  }
  action(){
    this.move();
    if(random(100) === 1){
      this.speedUp();
    }
    else if (random(100) === 1){
      this.speedDown();
    }
    else if(random(100) === 1){
      this.changeColour();
    }
    this.display();
  }
}