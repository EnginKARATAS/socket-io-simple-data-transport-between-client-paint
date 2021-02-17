var socket 

function setup() {
  createCanvas(500,500);
  background(200,22,2);
  socket = io.connect('http://localhost:3000/');
}

function draw() {
 
}

function mouseDragged(){
  noStroke();
  ellipse(mouseX,mouseY,50,50)
}