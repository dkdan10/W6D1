
const MovingObject = require("./moving_object.js")
const Asteroid = require('./asteroid')
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext('2d');


  let movingO = new MovingObject(
    { pos: [30, 30], vel: [10, 10], rad: 30, col: "#00FF00" }
  );

  movingO.draw(ctx);
  let asty = new Asteroid({ pos: [800, 450], col: "purple" });

  asty.dif = 5
  asty.grow = function () {
    this.rad += this.dif
    if (this.rad > 300) {
      this.dif = -5;
    } else if (this.rad < 20) {
      this.dif = 5;
    }
  }
  asty.changeColor = 0;
  asty.currentColor = getRandomColor();
  asty.draw  = function (ctx) {
    if (this.changeColor === 10) {
      this.changeColor = 0;
      this.currentColor = getRandomColor();
    }
    ctx.fillStyle = this.currentColor;
    this.changeColor += 1;
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
    
    ctx.fillStyle = "white";
    ctx.font = `${this.rad / 2}px Arial`;
    ctx.textAlign = "center";
    if (this.rad > 150) {
      ctx.fillText("Big Asty", this.pos[0], this.pos[1]);
      ctx.strokeText("Big Asty", this.pos[0], this.pos[1]);
    } else {
      ctx.fillText("Lil Asty", this.pos[0], this.pos[1]);
      ctx.strokeText("Lil Asty", this.pos[0], this.pos[1]);
    }

  }

  const asties = []
  for (let i = 0; i < 500; i++) {
    asties.push(new Asteroid({ pos: [750, 450] }));
  }

  setInterval(() => {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,1500,900);
    movingO.move()
    asty.move()
    asties.forEach(ast => {
      ast.move()
      ast.draw(ctx)
    })
    asty.grow();
    asty.draw(ctx)
    movingO.draw(ctx);
  }, 10);
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
