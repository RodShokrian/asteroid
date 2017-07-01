

function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {

  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "purple";
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};
//
// const test = new MovingObject({pos: [10, 10], vel: [5, 5], radius: 20, color: "blue"});
//
// console.log(test.pos);
// console.log(test.vel);
// console.log(test.radius);
// console.log(test.color);
module.exports = MovingObject;
