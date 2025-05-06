export function wrap_around(center, radius, max_edge) {
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