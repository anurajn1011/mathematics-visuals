// ball objects declared
// constructor (x, y, velocity_x, velocity_y, radius, mass)
let ball;

function setup() {
  createCanvas(500, 500);
  ball = new Ball(100, 150, -2, -6, 35, 1);
}

function draw() {
  fill("white");
  rect(0,0,width,height);
  ball.move();
  ball.display();

  // push();
  // fill("blue");
  // ellipse(50, 0, 100, 200);
  // pop();

  // fill("red");
  // circle(mouseX, mouseY, 100);

  // push();
  // fill("white");
  // text(`${mouseX}, ${mouseY}`, 20, 20);
  // pop();
}
