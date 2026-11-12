// Puzzle Game Starter
// Jack Breckon
// 11/3/2026


let grid = [
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]

];
let rows = grid.length;
let cols = grid[0].length;
let tileSize = 60;
let shape = "cross";

async function setup() {
  createCanvas(cols*tileSize,rows*tileSize);
  randomize();
}

function draw() {
  background(220);
  
  renderGrid();
  getCurrentX();
  winCon();
  overlay();
}
function mousePressed(){
  if(mouseX < width && mouseY < height){
    let x = getCurrentX();
    let y = getCurrentY();
    flip(x,y);
    if (keyIsDown(SHIFT)){
      return;
    }
    else if (shape === "cross"){
      if (x+1 <=cols-1) {
        flip(x+1,y);
      }
      if (x-1 >=0) {
        flip(x-1,y);
      }
      if (y+1 <=rows-1) {
        flip(x,y+1);
      }
      if (y-1 >=0) {
        flip(x,y-1);
      }
    }
    else {
      if (x+1 <=cols-1) {
        flip(x+1,y);
      }
      if (x+1 <=cols-1 && y+1<=rows -1 ) {
        flip(x+1,y+1);
      }
      if (y+1 <=rows-1) {
        flip(x,y+1);
      }
    }
  }
}

function flip(x,y){
  if (grid[y][x] === 255) {
    grid[y][x] = 0;
  }
  else {
    grid[y][x] = 255;
  }
}
function randomize(){
  for (let x = 0; x<grid.length;x++){
    for (let y = 0; y<grid[x].length;y++){
      grid[x][y] = random([0,255]);
    }
  }
}
function keyPressed(){
  if (key === ' '){
    if (shape === "cross"){
      shape = "square";
    }
    else{
      shape = "cross";
    }
  }
}


function winCon(){
  let counterwhite = 0;
  let counterblack = 0;
  for (let x = 0; x<grid.length;x++){
    for (let y = 0; y<grid[x].length;y++){
      if (grid[x][y] === 0){
        counterblack++;
      }
      else {
        counterwhite++;
      }
    }
  }
  if (counterblack === rows*cols|| counterwhite === rows*cols){
    console.log("you win congrats");
    textSize(32);
    fill('red');
    text("you win congrats twin :D",0,50);
  }
}

function getCurrentX(){
  let constrainedX = constrain(mouseX,0,width-1);
  return int(constrainedX/tileSize);
}
function getCurrentY(){
  let constrainedY = constrain(mouseY,0,height-1);
  return int(constrainedY/tileSize);
}

function renderGrid(){
  // interpret the data stored in 2D array and draw matrix of square to reflect it.
  for(let y = 0; y<rows;y++){
    for(let x = 0;x<cols;x++){
      let fillcolour =grid[y][x];
      fill(fillcolour);
      square(x*tileSize,y*tileSize,tileSize);
    }
  }
}



function overlay(){
  if(mouseX < width && mouseY < height){
    let overlay = color(0,255,0,127);
    fill (overlay);
    if (keyIsDown(SHIFT)){
      square(getCurrentX()*tileSize,getCurrentY()*tileSize,tileSize);
    }
    else if(shape === "cross"){
      square(getCurrentX()*tileSize,getCurrentY()*tileSize,tileSize);
      square(getCurrentX()*tileSize+tileSize,getCurrentY()*tileSize,tileSize);
      square(getCurrentX()*tileSize-tileSize,getCurrentY()*tileSize,tileSize);
      square(getCurrentX()*tileSize,getCurrentY()*tileSize+tileSize,tileSize);
      square(getCurrentX()*tileSize,getCurrentY()*tileSize-tileSize,tileSize);
    }
    else{
      square(getCurrentX()*tileSize,getCurrentY()*tileSize,tileSize);
      square(getCurrentX()*tileSize+tileSize,getCurrentY()*tileSize,tileSize);
      square(getCurrentX()*tileSize+tileSize,getCurrentY()*tileSize+tileSize,tileSize);
      square(getCurrentX()*tileSize,getCurrentY()*tileSize+tileSize,tileSize);
    }
  }
    
}
