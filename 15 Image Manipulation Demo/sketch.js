// Image Manipulation Demo
// Jack Breckon
// 11/10/2026

let pilot,chip,myVideo;

async function loadAsset(){
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");  
}


async function setup() {
  
  await  loadAsset();
  createCanvas(640,408);
  pixelDensity(1);

  myVideo = createCapture(VIDEO);
  myVideo.hide();
}

function draw() {
  background(220);
  image(myVideo,0,0);
  loadPixels();
  pixels[0] = 255;


  // between loadpixels and updatepixels 
  // run some code to modify array
  //boost();

  background(0)
  textEffect();
  //greyscale();

  //updatePixels();
}

function textEffect(){
  fill(255);
  let scaleAmmount = 5;
  textSize(scaleAmmount);

  for(let x = 0; x <width; x+= scaleAmmount){
    for(let y = 0; y < height; y+= scaleAmmount){
      let avg = getAvg(x,y);
      if (avg> 200) {
        text("&",x,y);
      }
      else if (avg > 120) {
        text("x",x,y);
      }
      else if (avg > 50) {
        text("-",x,y);
      }
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


function greyscale(){
  for(let x = 0; x <width; x++){
    for(let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg);
    } 
  }
}

function setPixel(x,y,r,g,b){
  let index = (y*width+x)*4;
  setPixelOneD(index,r,g,b);
}


function boost(){
  // brightening filte
  // r that is a dumb filter
  let boostAmmount = map(mouseX,0,width,-255,255);
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i] + boostAmmount;
    let g = pixels[i+1] + boostAmmount;
    let b = pixels[i+2] + boostAmmount;
    setPixelOneD(i,r,g,b);
  } 
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