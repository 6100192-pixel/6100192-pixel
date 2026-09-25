// Interactive Scene
// Jack Breckon
// Sept 21, 2026
// Making a scene with an artist mark, A protagonist, Interactivity, and a Scene

/// Global Variables
let mood = "happy";
let currentBack = 0;
let bg = 0;
let angle1 = 0.5;
let angle2 = 3;
let y = 200;
async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  /// Background
  noStroke();
  background(bg);
  /// Creation of the Scene
  fill(255, 218, 66);
  circle(windowWidth/2,windowHeight*2, windowHeight * 3.4);
  fill(255, 226, 108);
  circle(windowWidth/2*1.3,windowHeight*0.6, 200);
  fill(255, 205, 0);
  circle(windowWidth/2*0.8,windowHeight*0.8, 300);
  /// Creation of Protagonist

  fill(150,250,150);
  rect(mouseX-50, y, 25, 100);
  circle(mouseX, y, 100);
  rect(mouseX+25, y, 25, 100);
  /// Eyes
  stroke(0);
  fill(255);
  circle(mouseX-20,y,20);
  circle(mouseX+20,y,20);
  /// Making mouth
  fill(150,250,150);
  arc(mouseX,y+20, 30,30,angle1,angle2);
  noStroke();

  /// Mood Code
  if(mood === "happy"){
    angle1 = 0.5;
    angle2 = 3;
  }
  else if(mood === "sad"){
    angle1 = 3;
    angle2 = 6.5;

  }
  /// Artist Name
  fill(0,0,0);
  text("Jack Breckon",50,windowHeight-20);
}

function mousePressed() {
  /// background changer
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
  if(mouseButton.left === true){
    /// Mood Changer
    if(mood === "happy"){
      mood = "sad";
    } 
    else if(mood === "sad"){
      mood = "happy";
    }
  }
}

function keyPressed(){
  /// vertical movement of sprite
  if(keyCode === 40){
    y += 10;
  }
  if(keyCode === 38){
    y -= 10;
  }
}