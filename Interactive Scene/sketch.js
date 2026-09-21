// Interactive Scene
// Jack Breckon
// Sept 21, 2026
// Making a scene with an artist mark, A protagonist, Interactivity, and a Scene


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  /// Creation of Protagonist
  background(0);
  fill(150,250,150);
  rect(mouseX-50, 200, 25, 100);
  circle(mouseX, 200, 100);
  rect(mouseX+25, 200, 25, 100);
  noStroke();
  /// Creation of the Scene
  fill(200,200,200);
  circle(windowWidth/2,windowHeight*2, windowHeight * 3.4);
  fill(225,225,225);
  circle(windowWidth/2*1.3,windowHeight*0.6, 200);
  fill(100,100,100)
  circle(windowWidth/2*0.8,windowHeight*0.8, 300);




  /// Artist Name
  fill(0,0,0);
  text("Jack Breckon",50,windowHeight-20);
}

function keyPressed() { /// for Interactivity
  if (key === 'space') {
     
  }
}