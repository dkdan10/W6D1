
Function.prototype.inherits = function (Parent) {
  function Surrogate () {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  // this.prototype = Object.create(Parent.prototype);
}



function MovingObject() { }

MovingObject.prototype.moves = function () {
  console.log("Moving Object Moves");
}

function Ship() { }
Ship.inherits(MovingObject);
Ship.prototype.imAShip = function () {
  console.log("I'm a ship");
}

function Asteroid() { }
Asteroid.inherits(MovingObject);
Asteroid.prototype.imAnAstroid = function () {
  console.log("I'm an astroid")
}