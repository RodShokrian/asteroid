const inherits = require('./utils.js');
const MovingObject = require('./moving_object.js');
const COLOR = 'blue';
const RADIUS = 10;
function Asteroid (options) {
  this.COLOR = COLOR;
  this.RADIUS = RADIUS;

  if (!options.color){
    options.color = COLOR;
  }
  if (!options.radius){
    options.radius = RADIUS;
  }

  this.pos = MovingObject.call(this, options.pos);
  this.vel;
  this.radius = MovingObject.call(this, options.radius);
  this.color = MovingObject.call(this, options.color);
}

inherits(Asteroid.prototype, MovingObject.prototype);

// Asteroid.inherits(MovingObject);
// Return a randomly oriented vector with the given length.
function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return inherits.scale([Math.sin(deg), Math.cos(deg)], length);
}
// Scale the length of a vector by the given amount.
function scale (vec, m) {
  return [vec[0] * m, vec[1] * m];
}
