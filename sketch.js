var _0;
var _1;
var _2;
var _3;
var _4;
var _5;
var _6;
var _7;
var _8;
var _9;
var _10;
var _11;

function preload(){
 _0 = loadImage("Billder/0.png");
 _1 = loadImage("Billder/1.png");
 _2 = loadImage("Billder/2.png");
 _3 = loadImage("Billder/3.png");
 _4 = loadImage("Billder/4.png");
 _5 = loadImage("Billder/5.png");
 _6 = loadImage("Billder/6.png");
 _7 = loadImage("Billder/7.png");
 _8 = loadImage("Billder/8.png");
 _9 = loadImage("Billder/9.png");
 _10 = loadImage("Billder/10.png");
 _11 = loadImage("Billder/11.png");

 billeder = [_0,_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,_11];
 vælgBillede = floor(random(0, 11));
}

function setup() {
    createCanvas(400, 400);
  

  }
  
  function draw() {
    background(30);
    rect(10,10,10,10);

    image(billeder[vælgBillede],130,50,300,300);
    
}