import Character from "./classes/Character.js";
import Arrow from "./classes/Arrow.js";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const character = new Character(ctx, "/assets/scott.png");
const arrows = [];

window.onload = () => {
  character.draw();
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let counter = 0;

const startGame = setInterval(() => {
  counter++;
  clearCanvas();
  checkKeys();
  character.draw();
  if (counter % 100 === 0) {
    const arrow = new Arrow(ctx, "/assets/arrow.png");
    arrows.push(arrow);
  }
  arrows.forEach((el) => {
    el.draw();
    el.moveLeft();
    if (el.x < 0) {
      arrows.shift();
    }
    // Check character collision
    if (
      el.x < character.x + character.width &&
      el.x + el.width > character.x &&
      el.y < character.y + character.height &&
      el.height + el.y > character.y
    ) {
      console.log("collision");
      endGame();
    }
  });
}, 1000 / 60);

function checkKeys() {
  document.onkeydown = function (e) {
    switch (e.key) {
      case "ArrowRight":
        character.moveRight();
        break;
      case "ArrowLeft":
        character.moveLeft();
        break;
      case "ArrowUp":
        character.moveUp();
        break;
      case "ArrowDown":
        character.moveDown();
        break;
      case "x":
        endGame();
        break;
    }
  };
}

function endGame() {
  clearInterval(startGame);
  ctx.font = "30px Arial";
  ctx.fillText("Game Over", 10, 50);
}
