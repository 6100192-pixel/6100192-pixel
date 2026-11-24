// Recursive Imagery
// Jack Breckon
// Nov 24

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function concentric(x,y,d){
  circle(x,y,d);
  if(d > 10){
    concentric(x,y,d/1.5);
  }
}


function draw() {
  background(220);
  //concentric(width/2,height/2,width);
  circleFractal(width/2,height/2,width/2);
}



function circleFractal(x,y,d){
  circle(x,y,d);
  if(d>1){
    circleFractal( x - d/2,y,d/2);
    circleFractal( x + d/2,y,d/2);
    circleFractal(x,y-d/2,d/2);
  }
}