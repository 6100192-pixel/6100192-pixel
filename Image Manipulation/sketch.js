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
  createCanvas(640,408);
  await loadAsset();
  myVideo = createCapture(VIDEO);
  myVideo.hide();
}

function draw() {
  background(220);
  image(myVideo,0,0);
  loadPixels();
  //majoritycolour();
  //noGreen();
  //posterize();
  evilhMirror();
  //hMirror();
  updatePixels();
  
}

function evilhMirror(){
  for(let x = width/2; x > 0; x--){
    for (let y = 0; y < height; y++){
      let r = getRed(x,y);
      let g = getGreen(x,y);
      let b = getBlue(x,y);
      setPixel(x+2*(width/2-x),y,r,g,b);
    }
  }
}



function hMirror(){
  for(let x = width/2; x < width; x++){
    for (let y = 0; y < height; y++){
      let r = getRed(x,y);
      let g = getGreen(x,y);
      let b = getBlue(x,y);
      setPixel(x+2*(width/2-x),y,r,g,b);
    }
  }
}

function posterize(){
  for(let x = 0; x < width; x ++){
    for (let y = 0; y < height; y++){
      let avg = getAvg(x,y);
      if(avg > 205){
        setPixel(x,y,170,230,220);
      }
      else if ( avg > 155){
        setPixel(x,y,105,230,220);
      }
      else if (avg > 105){
        setPixel(x,y,120,280,60);
      }
      else if (avg > 55){
        setPixel(x,y,130,30,130);
      }
      else{
        setPixel(90,10,50);
      }
    }
  }
}



function noGreen(){
  for(let x = width/2; x < width; x ++){
    for (let y = 0; y < height; y++){
      let r = getRed(x,y);
      let b = getBlue(x,y);
      setPixel(x,y,r,0,b);
    }
  }
  
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