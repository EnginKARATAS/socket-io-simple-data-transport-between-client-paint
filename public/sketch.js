var socket 

function setup() {
  createCanvas(500,500);
  var io = require('socket.io').listen(server);
  background(50);
}

function draw() {
  noStroke();
  fill(0);
  ellipse(mouseX,mouseY,50,50)
}