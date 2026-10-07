// Simple Objects and Arrays
// Jack Breckon
// Oct 7, 2026

//let ball;
let ballArray= [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  //   ball = {
  //     x:300, y:400, size: 20,
  //     c: color(random(255),random(255),random(255)),
  //     xSpeed: 5, ySpeed: 4

//   };
}

function initObjects(n){
  for(let i = 0; i <n; i++){
    ballArray.push(generateBall(mouseX,mouseY));
  }
}

function keyPressed(){
  initObjects(1000);
}


function generateBall(x,y){
  // Create and return a ball object
  // initial position x,y
  let b = {
    x:x, y:y, size:20,
    c: color(random(255),random(255),random(255)),
    xSpeed: random(-6,6),
    ySpeed: random(-6,6),
    lifetime: random(40,60)
  };
  return b;
}


function moveBall(b){
  //b = ball type object, update position and draw ball

  b.x = b.x+ b.xSpeed; b.y+=b.ySpeed;
  if(b.x < 0 || b.x > width) {
    b.xSpeed *= -1;
  }
  if(b.y < 0 || b.y > height){
    b.ySpeed *= -1;
  }
  fill(b.c);
  circle(b.x,b.y,b.size);
}



function draw() {
  background(220);
  // loop through an array (traversal)
  for(let i = 0; i<ballArray.length; i++){
    let b = ballArray[i];
    moveBall(b);
    if(b.lifeTime <1){
      ballArray.splice(i,1);
    }
  }

  if(mouseIsPressed){
    ballArray.push(generateBall(mouseX,mouseY));
  }
}