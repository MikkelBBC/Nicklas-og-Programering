
let billeder = [];
let captions = ["Why so sad?", 
                "Can i eat this?", 
                "Whos your daddy?", 
                "When u are late for school", 
                "When mom finds the poop sock", 
                "When you find out your mom is your dad", 
                "Me when I talk to girls", 
                "My honest reaction to LGBTQ", 
                "When you forget to flush the toilet ", 
                "When you accidentally send a dick pick to your uncle", 
                "When you are not a white male and think you can vote", 
                "Pov the voice inside my head",
                "Mads when you don't do your homework",
                "When the educators have forgotten to close the door to the kindergarten",
                "When your homie looks ekstra thick",
                "POV it's monday",
                "Me after I have killed 17 children and committed war crimes",
                "Have you done your homework?",
                "When mom comes home and you haven't done the dishes",
                "TAKE OF YOUR PANTS!",
                "POV my sleep paralysis when i trying sleep",
                "When you want a girlfriend but you go to htx",
                "POV you are me",
                "Me trying to understand the LGBTQ girl with purple hair",
                "When i come in trouble for stealing the trans girls testosterone",
                "Sir you can't just rape people, the bomb up my ass",
                "When you plug the toilet intentionally",
                "When you parents say they love you but it's april first",
                "When your girlfreind wakes you up but you don't have a girlfreind",
                "Boy: mom I want to be a doctor, the stage 4 cancer in his brain",
              ];
let vælgBillede; 
let vælgCaption;
let nyMeme;
let like;
let dislike;
let vælgCaptionButtom;
let bottomKnap;  
let bottomKnapAktivation = false;
let bottomtext = [
  "                       XD", 
"                   I hate myself", 
"                   HAHAAHAHAHH!!!!", 
"Sucide is the only option", 
"I am dead inside", 
"It's warcrime time", 
"Welp Africa is no more", 
"Maybe hitler wasn't a bad person", 
"I am going to jail", 
"That's a certified HTX moment", 
"The bomb up your ass", 
"That's really how i feel",
"But it's your mother doing",
"Ohhh shit the cops are coming",
"It is rape time",
"                 RUN!!!!!!",
"It is time for revenge",
"Say hello to my little freind",
"The voices inside my head",
"You don't have the rights to vote",
"Daddy?",
"But dad is behind you",
"23",
"24",
"25",
"26",
"27",
"28",
"29",
"30",
];

function preload() {
  for (let i = 0; i < 30; i++) {
    billeder[i] = loadImage("Billder/" + i + ".png");
    billeder[i].resize(400, 400);
    // resize, vi gerne have billedet fylder hele skærmen for layout
  }
  vælgCaption = floor(random(0, 30));
  vælgBillede = floor(random(0, 30));
  vælgCaptionButtom = floor(random(0, 30));
}


function setup() {
    createCanvas(400, 400);
    nyMeme = createButton("Ny Meme");
    nyMeme.style('font-size', '17px');
    nyMeme.position(20, 420);
    nyMeme.size(100, 40);
    nyMeme.mousePressed(Restart);

    bottomKnap = createButton("Bottom text");
    bottomKnap.style('font-size', '16px');
    bottomKnap.position(120, 420);
    bottomKnap.size(100, 40);
    bottomKnap.mousePressed(Aktivation);
    
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
    if (bottomKnapAktivation == true) {
      text(bottomtext[vælgCaptionButtom], 40, 330, 350);
    }
    fill(255,0,0);
  
}


function Aktivation(){

  if (bottomKnapAktivation == false) {
    bottomKnapAktivation = true;
    bottomKnap.style('background-color', 'rgb(0, 0, 255)');
  } else if(bottomKnapAktivation == true){
    bottomKnap.style('background-color', 'rgb(255, 255, 255)');
    bottomKnapAktivation = false;
  }
}
function Restart() {
  vælgCaption = floor(random(0, 30));
  vælgBillede = floor(random(0, 30));
  vælgCaptionButtom = floor(random(0, 30));
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


