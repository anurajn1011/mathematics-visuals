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
   if (ball1.position.dist(ball2.position) < ball1.radius + ball2.radius) {
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
   let v2 = velocity + v1;
   return [v1, v2];
}

function collided(ball1, ball2) {
    /* 
        Method for handling the collision of two balls. To do so, we fix Ball1's position/velocity to the origin. This allows us to treat ball1 as stationary.
        From here, we can compute the velocity and position vectors that result from the collision, changing the basis of the space for easier computation.
    */

    // letting ball1 be centered at origin
    let ball1_pos_copy = ball1.position.copy();
    ball1.position.sub(ball1_pos_copy);
    ball2.position.sub(ball1_pos_copy);

    // letting ball1 be stationary
    let ball1_velocity_copy = ball1.velocity_vector.copy();
    ball1.velocity_vector.sub(ball1_velocity_copy);
    ball2.velocity_vector.sub(ball1_velocity_copy);

    // changing basis; rotating the frame of reference, observe that ball1 is invariant under rotation.
    let original_angle = ball2.position.heading();
    ball2.position.rotate(-original_angle);
    ball2.velocity_vector.rotate(-original_angle);

    // compute the result of the collision. Reason we only pass in the x-velocity of ball2 follows from the fact that the point of contact is along the x-axis.
    // this means that the momentum is transferred along the x-axis, so we can ignore the y-component.
    let [velocity2, velocity1] = elastic_collision(ball2.mass, ball1.mass, ball2.velocity_vector.x);
    ball1.velocity_vector.x = velocity1;
    ball2.velocity_vector.x = velocity2;

    // after collision we need to peel the balls away
    ball2.position.x = ball1.radius + ball2.radius + 0.1;
    
    // restoring to former coordinate system
    ball2.position.rotate(original_angle);
    ball2.velocity_vector.rotate(original_angle);
    ball1.velocity_vector.rotate(original_angle); // rotating this since the velocity we computed was in a different basis
    ball1.velocity_vector.add(ball1_velocity_copy);
    ball2.velocity_vector.add(ball1_velocity_copy);
    ball1.position.add(ball1_pos_copy);
    ball2.position.add(ball1_pos_copy);
}