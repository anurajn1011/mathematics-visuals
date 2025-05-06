import { wrap_around } from "./routines";

class Ball {
    constructor (x, y, velocity_x, velocity_y, radius, mass) {
        this.position = createVector(x, y);
        this.velocity_vector = createVector(velocity_x, velocity_y);
        this.radius = radius;
        this.mass = mass; // the mass of the body will just be the area
    }

    move() {
        this.position.add(this.velocity_vector);
        // account for wrapping behavior
        let coord_x = wrap_around(this.position.x, this.radius, width);
        let coord_y = wrap_around(this.position.y, this.radius, height);
        this.position.set(coord_x, coord_y);
    }
}