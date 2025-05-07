function wrap_around(center, radius, max_edge) {
    /* 
        Method for wrapping the ball around the edges of the canvas.
        When the center of the cirlce crosses the boundary, we wrap the object around.

        Reference: https://stackoverflow.com/questions/39606123/how-can-i-achieve-a-wraparound-effect-in-an-arcade-like-game
    */
    let region = max_edge + radius;
    center = center + radius; // computes where the boundary of the circle is
    let position = ((center % region) + region) % region // handles negatives
    return position - radius; // return the respective coordinate of the new center
}

function are_colliding(ball1, ball2) {
    /* 
        Method for detecting whether two balls have collided. Returns a boolean.
    */
   if (ball1.position.dist(ball2) < ball1.radius + ball2.radius) {
    return true;
   }
   return false;
}

function elastic_collision(mass1, mass2, velocity){
    /* 
        Method for computing the velocities of both balls post collision. 
        We assume that mass2 is stationary, for which we can adjust the frame of reference for in the collision handling method.
    */
   let v1 = velocity * ((mass1 - mass2)/(mass1 + mass2));
   let v2 = velocoty + v1;
   return (v1, v2);
}