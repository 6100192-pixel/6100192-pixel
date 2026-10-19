// OOP Pair Programming Starter Code
// Jack and Dara
// 10/29/2026


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let bulletArray = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  for(i = 0; i >= bulletArray.length; i++){
    i.update();
    i.display();
    //if (i.isOnScreen()){
    //  bulletArray.splice(i-1,i);
    //}
  }
}

function keyPressed() {
  enterprise.handleKeyPress();
  if(keyCode === 32){
    bulletArray.push(new Bullet(enterprise.x+ 40, enterprise.y,5,5,bulletImage));
  }
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if (keyIsDown(37)){
      this.x -= 5;
    }
    else if (keyIsDown(39)) {
      this.x += 5;
    }
    else if (keyIsDown (38)) {
      this.y -= 5;
    } 
    else if (keyIsDown (40)) {
      this.y += 5;
    }
    
    // if doing extra for experts, show bullet(s)
  }

  display() {
    image(this.theImage,this.x,this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.y -= 5;
  }

  display() {
    // show the bullet
    image(this.theImage,this.x,this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if (this.y >= 0){
      return false;
    }
    else {
      return true;
    }
  }
}

