const MovingObject = require('./moving_object.js')
const {inherits, randomVec, scale} = require('./utils.js')
const CONSTANT = {
  COLOR: "red",
  RADIUS: 13
}
function Asteroid (options) {
  options.col = options.col || CONSTANT.COLOR;
  options.rad = options.rad || CONSTANT.RADIUS;
  options.vel = randomVec(15);
  MovingObject.call(this, options);
}

inherits(Asteroid, MovingObject);


module.exports = Asteroid;