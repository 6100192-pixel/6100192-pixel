// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
async function loadAsset(){
  hand = await loadImage("/assets/hand.jpg");
  chip = await loadImage("/assets/chip.jpg");  
  nuit = await loadImage("/assets/nuit.jpg");
  race = await loadImage("/assets/race.jpg");  
}


async function setup() {
  createCanvas(600,600);
  await loadAsset();
}

function draw() {
  background(220);
  image(race,0,0);
  loadPixels();
  //majoritycolour();
  noGreen()
  updatePixels();
}
function noGreen(){
  
}

function majoritycolour(){
  for(let x = 0; x < width; x ++){
    for (let y = 0; y < height; y++){
      let r = getRed(x,y);
      let g = getGreen(x,y);
      let b = getBlue(x,y);
      if(r > g && r > b){
        r = 255;
        g = 0;
        b = 0;
      }
      else if(g> r && g > b){
        g = 255;
        r = 0;
        b = 0;
      }
      else if( b > r && b > g){
        b = 255;
        r = 0;
        g = 0;
      }
      else if( r === b || r === g){
        r = 255;
        b = 0;
        g = 0;
      }
      else{
        g = 255;
        r = 0;
        b = 255;
      }
      setPixel(x,y,r,g,b);
    }
  }
}


function getAvg(x,y){
  let index = (y*width+x)*4;
  let r = pixels[index];
  let g = pixels[index+1];
  let b = pixels[index+2];
  return int((r+g+b)/3);
}


function setPixelOneD(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function getRed(x,y){
  let index = (y*width+x)*4;
  return pixels[index];
}
function getGreen(x,y){
  let index = (y*width+x)*4;
  return pixels[index+1];
}
function getBlue(x,y){
  let index = (y*width+x)*4;
  return pixels[index+2];
}
function setPixel(x,y,r,g,b){
  let index = (y*width+x)*4;
  setPixelOneD(index,r,g,b);
}