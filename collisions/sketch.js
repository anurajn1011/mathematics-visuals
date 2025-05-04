function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("aqua");
  if (mouseIsPressed == true) {
    fill(0);
  } else {
    fill(255);
  }

  circle(mouseX, mouseY, 100);
}
