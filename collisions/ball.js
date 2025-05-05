class Ball {
    constructor (x, y, velocity_x, velocity_y, s) {
        this.position = createVector(x, y);
        this.velocity_vector = createVector(velocity_x, velocity_y);
        this.s = s;
        this.MASS = sq(s); // the mass of the body will just be the area
    }

    move() {
        this.position.add(this.velocity_vector);
    }
}