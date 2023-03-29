
let billeder = [];

function preload() {
  for (let i = 0; i < 12; i++) {
    billeder[i] = loadImage("Billder/" + i + ".png");
  }

  // load all images
 vælgBillede = floor(random(0, 11));
}

function setup() {
    createCanvas(400, 400);
  

  }
  
  function draw() {
    background(255);
    rect(10,10,10,10);

    image(billeder[vælgBillede],130,50,300,300);
    
}