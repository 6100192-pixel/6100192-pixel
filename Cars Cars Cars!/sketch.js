// Carsx3
// Jack Breckon
// Oct 20

let eastbound = [];
let westbound = [];
let stop = false;
let stoptimer = 120;


async function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  for(let i = 0; i < 20; i++){
    eastbound.push(new Vehicle(int(random(0,2)),color(random(255),random(255),random(255)),0,int(random(height/2,height/1.6)),0,random(10)));
    westbound.push(new Vehicle(int(random(0,2)),color(random(255),random(255),random(255)),1,int(random(height/2.7,height/2.1)),1,random(10)));
  }
  
}

function draw() {
  background(220);
  drawRoad();
  for (let c of eastbound){
    c.action();
  }
  for (let c of westbound){
    c.action();
  }
  if (stoptimer > 120){
    fill("green");
    stop = false;
  }
  else {
    fill("red");
    stop = true;
  }
  circle(width/2,height/6,200);
  stoptimer++;
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

function mousePressed(){
  if (mouseButton.left){
    if (keyIsDown(SHIFT)){
      westbound.push(new Vehicle(int(random(0,2)),color(random(255),random(255),random(255)),1,int(random(height/2.7,height/2.1)),1,random(10)));
    }
    else {
      eastbound.push(new Vehicle(int(random(0,2)),color(random(255),random(255),random(255)),0,int(random(height/2,height/1.6)),0,random(10)));
    }
  }
}

function keyPressed(){
  if (keyCode === 32){
    stoptimer = 0;

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
    if (this.type === 0){
      fill(this.colour);
      rect(this.x,this.y,30,30);
      fill(255);
      rect(this.direction*20+this.x,this.y,10,10);
      rect(this.direction*20+this.x,this.y+20,10,10);
    }
    else{
      fill(this.colour);
      rect(this.x,this.y,30,10);
      fill(255);
      rect(this.direction*20+this.x,this.y,10,10);
    }
  }
  move(){
    if (this.direction === 0){
      this.x += this.xSpeed;
      if (this.x > width){
        this.x = 0;
      }
    }
    else {
      this.x -= this.xSpeed;
      if (this.x < 0){
        this.x = width;
      }
    }
  }
  speedUp(){
    this.xSpeed += random(15);
    if(this.xSpeed < 0){
      this.xSpeed = random(15);
    }
    if (this.xSpeed > 30){
      this.xSpeed = 30;
    }
  }
  speedDown(){
    this.xSpeed -= random(15);
    if (this.xSpeed < 0){
      this.xSpeed = random(15);
    }
  }
  changeColour(){
    this.colour = color(random(255),random(255),random(255));
  }
  action(){
    if (stop === false){
      this.move();
      if(int(random(100)) === 1){
        this.speedUp();
      }
      else if (int(random(100)) === 1){
        this.speedDown();
      }
      else if(int(random(100)) === 1){
        this.changeColour();
      }
    }
    this.display();
  }
}