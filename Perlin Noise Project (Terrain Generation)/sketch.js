// Perlin Noise Project (Terrain Generation)
// Jack Breckon
// Oct 1, 2026


// global variables
let yTime = 5;
let ySpeed = 0.01;
let Ystart = yTime;
let rectwidth = 1;
let largestY = 1;
let largestX = 1;
let average;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //starter code
  gradientBackground();
  noStroke();
  yTime = Ystart;
  Ystart += ySpeed;
  generateTerrain();
  drawFlag(largestX,largestY);
  markaverage();
}


function generateTerrain() {
  // creates the code and takes the largest Y and saves it (also the X)
  average = 0;
  largestY = height;
  for(let x = 0; x < width; x += rectwidth) {
    let y = noise(yTime);
    y = map(y,0,1,0,height);
    yTime += ySpeed;
    fill(0);
    rect(x,y,rectwidth,height);
    // saving of largestY and largestX
    if(y < largestY){
      largestY = y;
      largestX = x;
    }
    // grabs the average
    average += y;
  }
}
function keyPressed() {
  // The interactive Widths
  if(key === LEFT_ARROW){
    rectwidth += 1;
  }
  if(key === RIGHT_ARROW && rectwidth > 1){
    rectwidth -=1;
  }
}

function drawFlag(x,y) {
  // drawing flag function
  stroke(0);
  fill(200,0,0);
  rect(x,y- 30,10,10);
  line(x,y,x,y-30);
  noStroke();
}

function markaverage(){
  // calculates average based off info from generateTerrain()
  average /= width;
  average *= rectwidth;
  fill(127);
  rect(0,average-5,width,10);

}

function gradientBackground(){
  noStroke();
  // create a gradient to use as background
  let y;
  let h = 1;
  let heightButCooler = height;
  while(y > 0){
    fill(y,y/2,y/2);
    rect(0, y, width,h);
    y -= h;
  }
}