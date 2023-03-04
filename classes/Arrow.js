class Arrow {
  constructor(ctx, image) {
    this.ctx = ctx;
    this.x = window.innerWidth;
    this.y = Math.floor(Math.random() * window.innerHeight);
    this.width = 50;
    this.height = 50;
    this.img = new Image();
    this.img.src = image;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 1;
  }
}

export default Arrow;
