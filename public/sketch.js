var socket 

function setup() {
  createCanvas(500,500);
  socket = io.connect("http://localhost:3000");
  background(50);
}

function draw() {
  noStroke();
  fill(0);
  ellipse(mouseX,mouseY,50,50)
}