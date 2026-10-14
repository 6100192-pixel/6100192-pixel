// Objects Demo
// Jack Breckon
// Oct 14, 2026

// global variables
let myBook; // cant INIT objects here..
// challenge one : add amd display 2 more books, one soft one hard
// challenge 2: fill an array with 5 books use same title, author for each numeric can be random/pattern
let masonbook;
let elijahbook;
let book4;
let book5;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // create a single book
  myBook = new Book("masonismean","Jack",20100816,"leatherbound",500,width*0.3);
  masonbook = new Book("iampoopy","Mason",20100817,"hardcopy",500,width*0.45);
  elijahbook = new Book("mesocool","eljah",20100818,"softcopy",500,width*0.6);
  book4 = new Book("imsooriginal","JohnDoe",20100819,"leatherbound",500,width*0.75);
  book5 = new Book("imsounoriginal","JaneDoe",20100820,"leatherbound",500,width*0.15);
}

function draw() {
  background(220);
  myBook.display();
  masonbook.display();
  elijahbook.display();
  book4.display();
  book5.display();
}


// Classes are nicely organised into the bottom of our file, or perhaps their own file..
class Book {
  //1. constructor
  constructor(title, author, isbn, cover, pages, x) {
    this.title = title;
    this.author = author;
    this.x = x;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
  }
  //2. class functions
  // inside a class, we omit the "function" keyword
  display() {
    // render our book object on the Canvas
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    textSize(20);

    // set fill color based on the coverType (H,S,L)
    switch (this.cover) {
      case "softcover":
        fill(220, 220, 0); break;
      case "hardcover":
        fill(100, 255, 255); break;
      case "leatherbound":
        fill(150, 0, 150); break;;;;;;;;;;;;;;;;;
    }

    rect(this.x, height / 2, this.pages / 10, 150);
    fill(255);
    text(this.title[0],this.x,height/2);
  }
}