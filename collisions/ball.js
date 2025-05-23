class Ball {
    constructor (x, y, velocity_x, velocity_y, radius, mass) {
        this.position = createVector(x, y);
        this.velocity_vector = createVector(velocity_x, velocity_y);
        this.radius = radius;
        this.mass = PI * sq(this.radius); // the mass of the body will just be the area
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
    }

    move() {
        this.position.add(this.velocity_vector);
        // account for wrapping behavior
        let coord_x = wrap_around(this.position.x, this.radius, width);
        let coord_y = wrap_around(this.position.y, this.radius, height);
        this.position.set(coord_x, coord_y);
    }

    display() {
        fill(this.color);
        circle(this.position.x, this.position.y, 2 * this.radius);
    }
}