class BasicEnemy extends Movable {
  constructor(gameWidth, gameHeight) {
    super(gameWidth, gameHeight);
    this.velX = Math.floor(Math.random() * 100) - 50;
    this.velY = Math.floor(Math.random() * 100) - 50;
    this.color = { r: 255, g: 0, b: 0, a: 1 };
    this.height = 15;
    this.width = 15;
    this.position.x = Math.floor(Math.random() * gameWidth - this.width);
    this.position.y = Math.floor(Math.random() * gameHeight - this.height);
  }

  update(deltaTime) {
    this.position.x += this.velX / deltaTime;
    this.position.y += this.velY / deltaTime;

    if (this.position.x < 0) {
      this.position.x = 0;
      this.velX = -this.velX;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velY = -this.velY;
    }
    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
      this.velX = -this.velX;
    }
    if (this.position.y + this.height > this.gameHeight) {
      this.position.y = this.gameHeight - this.height;
      this.velY = -this.velY;
    }
  }
}
