// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global variables
let xTime = 5; let xSpeed = 0.01;
let xStart = xTime;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  xTime = xStart;
  xStart += xSpeed;
  tower();
}

function tower() {
  // create a tower with circle of different y position. X position will be randomly selected
  for(let y = 0; y < height; y += 1){
    let x = noise(xTime); // gives value between 0-1
    x = map(x,0,1,0,width);
    xTime += xSpeed;
    fill(x);
    circle(x,y,20);
    noStroke();
  }
}
