// Image Manipulation Demo
// Jack Breckon
// 11/10/2026

let pilot,chip;

async function loadAsset(){
  pilot = await loadImage("/assets/aviator.png");
  chip = await loadImage("/assets/chip.jpg");  
}


async function setup() {
  
  await  loadAsset();
  createCanvas(pilot.width, pilot.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(pilot,0,0);
  loadPixels();
  pixels[0] = 255;


  // between loadpixels and updatepixels 
  // run some code to modify array
  boost();





  updatePixels();
}


function boost(){
  // brightening filter that is a dumb filter
  let boostAmmount = map(mouseX,0,width,-255,255);
  for(let i = 0; i < pixels.length; i+=4){
    let r = pixels[i] + boostAmmount;
    let g = pixels[i+1] + boostAmmount;
    let b = pixels[i+2] + boostAmmount;
    setPixelOneD(i,r,g,b)
  } 
}


function setPixelOneD(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}