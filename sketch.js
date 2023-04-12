
let billeder = [];
let captions = ["Why so sad?", 
                "Can i eat this?", 
                "Whos your daddy?", 
                "When u are late for school", 
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
let nyMeme;
let like;
let dislike;

function preload() {
  for (let i = 0; i < 12; i++) {
    billeder[i] = loadImage("Billder/" + i + ".png");
  }

 vælgCaption = floor(random(0, 11));
 vælgBillede = floor(random(0, 11));
}

function setup() {
    createCanvas(400, 400);
    nyMeme = createButton("Ny Meme");
    nyMeme.position(345, 30);
    nyMeme.mousePressed(Restart);

    like = createButton("Like");
    like.position(345, 60);
    like.mousePressed(Like);
    
    dislike = createButton("Dislike");
    dislike.position(345, 90);
    dislike.mousePressed(Dislike);
  }

  function draw() {
    background(255);

    image(billeder[vælgBillede],50,100,350,300);
    textSize(18);
    textFont("Trebuchet MS");
    text(captions[vælgCaption], 40, 15, 350);
    
}

function Restart() {
  vælgCaption = floor(random(0, 11));
  vælgBillede = floor(random(0, 11));
}

function Like() {
  console.log("Like");
  // give current picture and caption a like
}

function Dislike() {
  console.log("Dislike");
  // give current picture and caption a dislike
}
