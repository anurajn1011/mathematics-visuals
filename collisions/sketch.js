function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("green");

  push();
  fill("blue");
  ellipse(50, 0, 100, 200);
  pop();

  fill("red");
  circle(mouseX, mouseY, 100);
}
