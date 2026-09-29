// Random vs Noise
// Jack Breckon
// Saturday 29, 2026

// global variables
let minSize = 5;
let maxSize = 200;
let x1; let y1;
let x2; let y2;
// for noise()
let noiseTime = 10;
// noiseTime = current coordinate on noise graph
let noiseSpeed = 0.01; 


async function setup() {
  createCanvas(windowWidth, windowHeight);
  y1 = height / 2;
  x1 = width * 0.3;
  x2 = width * 0.7;
  y2 = height / 2;
}

function draw() {
  background(220);
  //randomCircle(0);
  //noiseCircle();
  moveCircle();
}

function noiseCircle(){
  // another circle, this time the diameter is generate using noise(), smoothly
  fill(150,255,150);
  let d = noise(noiseTime);
  d = map(d,0,1,minSize, maxSize);
  circle(x2,y2,d);
  noiseTime += noiseSpeed;
}

function moveCircle(){
  // using perlin noise(), draw a 40px corc;e that moves left or right randomly, wrapping around if it leaves the screen.
  fill(150,150,255);
  let x = noise(noiseTime);
  x = map(x,0,1,0,width);
  noiseTime += noiseSpeed;
  circle(x,y1,50);
}

function randomCircle() {
  //draw a fixed position circle with randomly changing diameter
  fill(150, 150, 255);
  let d = random(minSize, maxSize);
  circle(x1, y1, d);
}