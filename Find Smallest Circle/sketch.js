// Find Smallest Circle
// Jack Breckon
// oct 5 2026


const NUM_CIRCLES = 100;
let seed;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  randomSeed(seed);
  background(220);
  drawCircles();
}

function drawCircles(){
  // draw NUM CIRCLES circles all over the screen sizes are ranodm, nnoFillby default
  let smallDiameter = Infinity;
  let smallX = -1;
  let smallY = -1; // dummy value
  noFill();
  for(let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0,width);
    let y = random(0,height);
    let d = random(20,60);

    circle(x,y,d);
    if(d < smallDiameter){
      smallDiameter = d;
      smallX = x;
      smallY = y;
    }
  }
  fill('orange');
  circle(smallX,smallY,smallDiameter);
}