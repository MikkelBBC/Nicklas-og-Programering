
let billeder = [];
let captions = ["caption1", 
                "caption2", 
                "caption3", 
                "caption4", 
                "caption5", 
                "caption6", 
                "caption7", 
                "caption8", 
                "caption9", 
                "caption10", 
                "caption11", 
                "caption12"];
let vælgBillede;
let vælgCaption;


function preload() {
  for (let i = 0; i < 12; i++) {
    billeder[i] = loadImage("Billder/" + i + ".png");
  }

 vælgCaption = floor(random(0, 11));
 vælgBillede = floor(random(0, 11));
}

function setup() {
    createCanvas(400, 400);
  
  }

  function draw() {
    background(255);

    image(billeder[vælgBillede],50,100,350,300);
    textSize(18);
    textFont("Trebuchet MS");
    text(captions[vælgCaption], 40, 15, 350);
}