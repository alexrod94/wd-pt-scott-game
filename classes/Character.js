class Character {
  constructor(ctx, image) {
    this.x = 0;
    this.y = 0;
    this.width = 90;
    this.height = 60;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = image;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 10;
  }

  moveLeft() {
    this.x -= 10;
  }

  moveUp() {
    this.y -= 10;
  }

  moveDown() {
    this.y += 10;
  }
}

export default Character;
