class Player extends Movable {
  constructor(gameWidth, gameHeight) {
    super(gameWidth, gameHeight);
    this.width = 30;
    this.height = 30;
    this.speed = 100;
    this.health = 1000000;
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

    for (let i = 0; i < gameObjects.length; i++) {
      if (gameObjects[i] instanceof BasicEnemy) {
        if (intersectRect(this.getRect(), gameObjects[i].getRect())) {
          this.health -= 1;
        }
      }
      if (gameObjects[i] instanceof FastEnemy) {
        if (intersectRect(this.getRect(), gameObjects[i].getRect())) {
          this.health -= 2;
        }
      }
    }
    if (this.health <= 0) {
      currentState = GAME_STATE.died;
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
