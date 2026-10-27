// Translations and rotations
// Jack Breckon
// Oct 23 2026



async function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width/2,height/2);
  fill(255);
  circle(0,0,400);
  fill(0);
  for(let i = 0; i < 360;i += 6){
    push();
    rotate(i);
    rect(180,0,30,5);
    pop();
  }
  for(let i = 0; i < 360;i+= 30){
    push();
    rotate(i);
    rect(170,0,50,10);
    pop();
  }
  push();
  rotate(second()*6-90);
  line(0,0,100,100);
  pop();
  push();
  strokeWeight(3);
  rotate(minute()*6-90);
  line(0,0,100,100);
  pop();
  push();
  strokeWeight(7);
  rotate(hour()*60-90);
  line(0,0,100,100);
  pop();
  
}
