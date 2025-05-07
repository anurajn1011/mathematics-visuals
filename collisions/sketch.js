// ball objects declared
// constructor (x, y, velocity_x, velocity_y, radius, mass)
const LENGTH = 10;
let ballArr = []

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < LENGTH; i++) {
    ballArr.push(new Ball(random(0, 500), random(0, 500), random(-2, 2), random(-2, 2), random(10, 35), random(1, 4)))
  }
}

function draw() {
  background(230);
  colorMode(HSB);

  for (let i = 0; i < ballArr.length; i++) {
    ballArr[i].move();
  }
  //collision
  for (let i = 0; i < ballArr.length; i++) {
    for (let j = i + 1; j < ballArr.length; j++) {
      if (are_colliding(ballArr[i], ballArr[j])){
        collided(ballArr[i], ballArr[j]);
      }
    }
  }

  for (let i = 0; i < ballArr.length; i++) {
    ballArr[i].display();
  }

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
