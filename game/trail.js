class Trail {
  constructor(gameWidth, gameHeight, parent) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.width = 10;
    this.height = 10;
    this.speed = 10;
    this.velX = 0;
    this.velY = 0;
    this.color = { r: 0, g: 0, b: 255, a: 1 };
    this.position = {
      y: gameHeight / 2 - this.height / 2,
      x: gameWidth / 2 - this.width / 2,
    };
    if (parent instanceof Player) {
      this.color = { r: 0, g: 0, b: 255, a: 1 };
    }
  }

  render(ctx) {
    ctx.shadowBlur = 0;
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
  }
  update(deltaTime) {
    this.color.a -= deltaTime / 1000;
    if (this.color.a <= 0) this.color.a = 0;
  }
}
