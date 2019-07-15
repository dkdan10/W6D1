// const {inherits} = require('./utils.js')
function MovingObject(option) {
  this.pos = option.pos;
  this.vel = option.vel;
  this.rad = option.rad;
  this.col = option.col;
}
 MovingObject.prototype.draw = function(ctx) {
   ctx.fillStyle = this.col;
   ctx.beginPath();

   ctx.arc(
     this.pos[0],
     this.pos[1],
     this.rad,
     0,
     2 * Math.PI,
     false
   );

   ctx.fill();
 }

 MovingObject.prototype.move = function() {
   this.pos[0] += this.vel[0]
   this.pos[1] += this.vel[1]
   if (this.pos[1] > 900) {
     this.pos[1] = 0;
   } else if (this.pos[1] < 0) {
     this.pos[1] = 900;
   } 
   if (this.pos[0] > 1500) {
     this.pos[0] = 0;
   } else if (this.pos[0] < 0) {
     this.pos[0] = 1500;
   }
 }

module.exports = MovingObject;