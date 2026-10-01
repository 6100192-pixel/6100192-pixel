// Perlin Noise Project (Terrain Generation)
// Jack Breckon
// Oct 1, 2026


// global variables
let yTime = 5;
let ySpeed = 0.01;
let Ystart = yTime;
let rectwidth = 1;
let largestY = 1;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();
  yTime = Ystart;
  Ystart += ySpeed;
  generateTerrain();
  //drawFlag
}


function generateTerrain() {
  for(let x = 0; x < width; x += rectwidth) {
    let y = noise(yTime);
    y = map(y,0,1,0,height);
    yTime += ySpeed;
    fill(0);
    rect(x,width,rectwidth,-y);
    if(y > largestY){
      largestY = y;
    }
  }
}
function keyPressed() {
  if(key === LEFT_ARROW){
    rectwidth += 1;
  }
  if(key === RIGHT_ARROW && rectwidth > 1){
    rectwidth -=1;
  }
}