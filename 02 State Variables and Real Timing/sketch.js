// State Variable / Real Time
// Jack Breckon
// Sept 23, 2026

// Global variables
let objectType = 0;
// 0 = circle
// 1 = triangle
// 2 = starburst 
let startTime = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawShape()
  let elapsed = millis()-startTime
  if(elapsed > 2000){
    updateState();
    startTime = millis();
  }
}

function drawShape() {
  // inspect state variable (objecttype) and draw one of the three possible shapes on the Canvas
  //[ALT][SHIFT][F] AUTOFORMAT
  let x = width / 2;
  let y = height / 2;
  switch (objectType) {
    case 0:
      circle(x, y, 150);
      break;
    case 1:
      triangle(x - 80, y + 50, x + 80, y + 50, x, y - 50);
      break;
    case 2:
      for (let i = 0; i < 3000; i++) {
        let x2 = random(x - 2000, x + 2000);
        let y2 = random(y - 2000, y + 2000);
        line(x, y, x2, y2);
        stroke(int(random(255)),int(random(255)),int(random(255)));
      }
  }
}
function keyPressed(){
  updateState()
}


function updateState(){
  objectType++;
  if(objectType > 2) {
    objectType = 0
  }
}