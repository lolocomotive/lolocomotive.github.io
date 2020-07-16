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
    this.position.x += this.velX * (deltaTime / 200);
    this.position.y += this.velY * (deltaTime / 200);

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
    var i;
    for (i = 0; i < this.trails.length; i++) {
      this.trails[i].update(deltaTime);
      if (this.trails[i].color.a <= 0) {
        this.trails.shift();
      }
    }
  }
}

class FastEnemy extends Movable {
  constructor(gameWidth, gameHeight) {
    super(gameWidth, gameHeight);
    this.velX = (Math.floor(Math.random() * 100) - 50) * 2;
    this.velY = (Math.floor(Math.random() * 100) - 50) * 2;
    this.color = { r: 0, g: 255, b: 255, a: 1 };
    this.height = 18;
    this.width = 18;
    this.position.x = Math.floor(Math.random() * gameWidth - this.width);
    this.position.y = Math.floor(Math.random() * gameHeight - this.height);
  }

  update(deltaTime) {
    this.position.x += this.velX * (deltaTime / 200);
    this.position.y += this.velY * (deltaTime / 200);
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
    var i;
    for (i = 0; i < this.trails.length; i++) {
      this.trails[i].update(deltaTime);
      if (this.trails[i].color.a <= 0) {
        this.trails.shift();
      }
    }
  }
}
