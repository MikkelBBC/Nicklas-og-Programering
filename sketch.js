
let billeder = [];
let captions = ["Why so sad?", 
                "Can i eat this?", 
                "Whos your daddy?", 
                "When u are late for school", 
                "caption4", 
                "caption5", 
                "caption6", 
                "caption7", 
                "caption8", 
                "caption9", 
                "caption10", 
                "caption11"];
let vælgBillede;
let vælgCaption;
let nyMeme;
let like;
let dislike;

function preload() {
  for (let i = 0; i < 12; i++) {
    billeder[i] = loadImage("Billder/" + i + ".png");
  }
//  for (let i = 0; i < 12; i++) {
//    captions[i] = loadStrings("Captions/" + i + ".txt");
//  }


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
  //text(random[vælgCaptions], 40, 15, 350);
    text(captions[vælgCaption], 40, 15, 350);
    
}

function Restart() {
  vælgCaption = floor(random(0, 11));
  vælgBillede = floor(random(0, 11));
}

 // give current picture and caption a like
function Like() {
  
  
    console.log("Like");
    console.log("Billede nr. = "+vælgBillede);
    console.log("Captions nr. = "+vælgCaption);
}

  // give current picture and caption a dislike
function Dislike() {
  

  console.log("Dislike");
  console.log("Billede nr. = "+vælgBillede);
  console.log("Captions nr. = "+vælgCaption);
}


// Vi kan lave hvor man selv skriver skrift ind i et felt og så gemmer den det som en caption


