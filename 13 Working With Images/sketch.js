// 13 Working with Images
// Jack Breckon
// Oct 30, 2026
let lionL,lionR;
let dir = "left";

let pinImages = [];
let pinIndex = 0;


async function setup() {
  // pinwheel images
  for(let i = 0; i <9; i++){
    pinImages.push(await loadImage("/assets/pin-0"+ i +".png"));
  }
   


  // lion images
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  lionR = await loadImage("assets/lion-right.png");
  lionL = await loadImage("assets/lion-left.png");
}


function draw(){
  background(220);
  drawlion();
  drawPin();
}

function drawPin(){
  image(pinImages[pinIndex], width/2,height*0.75);
  if(frameCount % 2 === 0){

    if ( pinIndex <8){
      pinIndex++;
    }
    else{
      pinIndex = 0;
    }
  }
}




function drawlion() {
  if(movedX > 0){
    dir = "right";
  }
  else if (movedX < 0){
    dir = "left";
  }
  switch(dir){
  case "left": image(lionL,mouseX,mouseY,lionL.width/2,lionL.height/2);
    break;

  case "right": image(lionR,mouseX,mouseY,lionR.width/2,lionR.height/2);
    break;
  }
}

