// Drawing with single loops
// Jack Breckon
// Sept 25, 2026
// 


async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function worm(y,size){
  for(let x = size/2; x < width; x += size){
    circle(x,y,size)
  }
}

function gradientBackground(){
  noStroke();
  // create a gradient to use as background
  let y = 0;
  let h = 1;
  while(y < height){
    fill(y * mouseY/1000, y * mouseX/1000, y* ((mouseX+mouseY)/2));
    rect(0, y, width,h);
    y += h;
  }
}
function challenge(d) {
  for(let x = d/2; x < width; x += d){
    circle(x,0,d)
    line(x,0,mouseX,mouseY)
    circle(x,height,d)
    line(x,height,mouseX,mouseY)
  }
  for(let x = 0; x < width; y += d*2){
    circle(x,y,d)
    line(x,y,mouseX,mouseY)
    circle(x,height,d)
    line(x,height,mouseX,mouseY)
  }
}
function draw() {
  background(220);
  challenge(40)
  //gradientBackground();
  //worm(windowHeight /2,40);
  //worm(50,30);
}
