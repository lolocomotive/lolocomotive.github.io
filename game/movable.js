class Movable {
  constructor(gameWidth, gameHeight, x, y) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.width = 10;
    this.height = 10;
    this.speed = 10;
    this.velX = 0;
    this.velY = 0;
    this.parsedColor = 0;
    this.color = { r: 0, g: 0, b: 255, a: 1 };
    this.trails = [];
    this.position = {
      y: y,
      x: x,
    };
  }

  render(ctx) {
    var i;
    for (i = 0; i < this.trails.length; i++) {
      //this.trails[i].render(ctx);
    }
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",")
      .concat(this.color.a)
      .concat(")");
    ctx.fillStyle = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",")
      .concat(this.color.a)
      .concat(")");
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    this.trails[this.trails.length] = new Trail(
      this.gameWidth,
      this.gameHeight,
      this
    );
  }
  update(deltaTime) {
    this.position.x += this.velX * (deltaTime / 200);
    this.position.y += this.velY * (deltaTime / 200);

    if (this.position.x < 0) this.position.x = 0;
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
    if (this.position.y + this.height > this.gameHeight)
      this.position.y = this.gameHeight - this.height;
    for (i = 0; i < this.trails.length; i++) {
      this.trails[i].update(deltaTime);
      if (this.trails[i].color.a <= 0) {
        this.trails[i] = undefined;
      }
    }
  }
  moveLeft() {
    this.velX = -this.speed;
  }
  moveRight() {
    this.velX = this.speed;
  }
  moveUp() {
    this.velY = -this.speed;
  }
  moveDown() {
    this.velY = this.speed;
  }
  stopX() {
    this.velX = 0;
  }
  stopY() {
    this.velY = 0;
  }
  getRect() {
    return {
      top: this.position.y,
      left: this.position.x,
      bottom: this.position.y + this.height,
      right: this.position.x + this.width,
    };
  }
}
