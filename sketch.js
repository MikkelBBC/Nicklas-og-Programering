let billede = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"];
let LavBillede;

function setup() {
    createCanvas(400, 400);
    LavBillede = createImg(billede,"hej");
}
  
  function draw() {
    background(220);
    rect(10,10,10,10);
    
}