// Interactive Scene
// Jack Breckon
// Sept 21, 2026
// Making a scene with an artist mark, A protagonist, Interactivity, and a Scene
let mood = "happy"
let currentBack = 0
let bg = 0;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  /// Creation of Protagonist
  noStroke();
  background(bg);
  fill(150,250,150);
  rect(mouseX-50, 200, 25, 100);
  circle(mouseX, 200, 100);
  rect(mouseX+25, 200, 25, 100);
  
  /// Making mouth
  stroke(0)
  arc(mouseX,220, 30,30,);
  noStroke()
  /// Creation of the Scene
  fill(255, 218, 66);
  circle(windowWidth/2,windowHeight*2, windowHeight * 3.4);
  fill(255, 226, 108);
  circle(windowWidth/2*1.3,windowHeight*0.6, 200);
  fill(255, 205, 0);
  circle(windowWidth/2*0.8,windowHeight*0.8, 300);




  /// Artist Name
  fill(0,0,0);
  text("Jack Breckon",50,windowHeight-20);
}

function mousePressed() {
  if (mouseButton.center === true){
    if(bg === 0){
      currentBack = 1;
      bg = 125;
    }
    else if(bg === 125){
      bg = 200;
      currentBack = 2;
    }
    else if(bg === 200){
      currentBack = 3;
      bg = 255;
    }
    else if(bg === 255){
      currentBack = 4;
      bg = 0;
    }
  }
  if (mouseButton.left === true){
    mood = "sad";
  } else if(mood === "sad"){
    mood = "happy";
  }
}