
let billeder = [];
let captions = ["Why so sad?", 
                "Can i eat this?", 
                "Whos your daddy?", 
                "When u are late for school", 
                "When mom finds the poop sock", 
                "When you find out your mom is your dad", 
                "Me when I talk to girls", 
                "My honest reaction to LGBTQ", 
                "When you forget to fluush the toilet ", 
                "When you accidentally sends dick pick to uncle", 
                "When you are not a white male at think you can vote", 
                "Pov the voice inside my head"];
let vælgBillede;
let vælgCaption;
let nyMeme;
let like;
let dislike;


function preload() {
  for (let i = 0; i < 12; i++) {
    billeder[i] = loadImage("Billder/" + i + ".png");
    billeder[i].resize(400, 400);
    // resize, vi gerne have billedet fylder hele skærmen for layout
  }
  vælgCaption = floor(random(0, 11));
  vælgBillede = floor(random(0, 11));
}


function setup() {
    createCanvas(400, 400);
    nyMeme = createButton("Ny Meme");
    nyMeme.style('font-size', '17px');
    nyMeme.position(20, 420);
    nyMeme.size(100, 40);
    nyMeme.mousePressed(Restart);

    

    like = createButton("Like");
    like.style('font-size', '17px');
    like.style('background-color', 'rgb(0, 250, 0)');
    like.position(220, 420);
    like.size(100, 40);
    like.mousePressed(Like);
    
    dislike = createButton("Dislike");
    dislike.style('font-size', '17px');
    dislike.style('background-color', 'rgb(255, 0, 0)');
    dislike.position(320, 420);
    dislike.size(100, 40);
    dislike.mousePressed(Dislike);
  }

  function draw() {
    background(255);

    image(billeder[vælgBillede],0,0,400,400);
    textSize(30);
    textFont("Impact Light");
  //text(random[vælgCaptions], 40, 15, 350);
    text(captions[vælgCaption], 40, 15, 350);
    fill(255,0,0);
  
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


