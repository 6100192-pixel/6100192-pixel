// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220)
  mouseReport();
  updateSquare();
}

function updateSquare(){
  fill(c);
  square(x,y,50)
  if(keycode===40 && keyIsPressed){
    y+=2;
}
if(keyIsDown(LEFT_ARROW)){
  x -= 5;

}
}


function mouseReport(){
  textSize(100);
  

  let mouseingo = mouseIsPressed + " "
                + mouseButton.left + " "
                + mouseButton.center + " "
                + mouseButton.right + " ";
  text(mouseingo,mouseX,mouseY);

  drawSquare();

}

function keyPressed(){
  print(key + " " + keyCode);

  if(key==="a"){
    c = "red";
  }
  else if(keyCode===32){
    c = "yellow"
  }
  else if(keyCode===40){
    y += 10;
  }
}
