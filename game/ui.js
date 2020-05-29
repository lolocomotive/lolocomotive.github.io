class UITextSimpleCenter {
  constructor(x, y, text, font, size, color) {
    this.position = { x: x, y: y };
    this.size = size;
    this.font = font;
    this.text = text;
    this.color = color;
  }
  render(ctx) {
    ctx.shadowBlur = 1;
    ctx.shadowColor = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",.1)");

    ctx.fillStyle = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",")
      .concat(this.color.a)
      .concat(")");
    ctx.font = this.size.concat(" ").concat(this.font);
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
  update(deltaTime) {}
}
class UITextSimpleLeft {
  constructor(x, y, text, font, size, color) {
    this.position = { x: x, y: y };
    this.size = size;
    this.font = font;
    this.text = text;
    this.color = color;
  }
  render(ctx) {
    ctx.shadowBlur = 1;
    ctx.shadowColor = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",.1)");

    ctx.fillStyle = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",")
      .concat(this.color.a)
      .concat(")");
    ctx.font = this.size.concat(" ").concat(this.font);
    ctx.textAlign = "left";
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
  update(deltaTime) {}
}
class UITextSimpleRight {
  constructor(x, y, text, font, size, color) {
    this.position = { x: x, y: y };
    this.size = size;
    this.font = font;
    this.text = text;
    this.color = color;
  }
  render(ctx) {
    ctx.shadowBlur = 1;
    ctx.shadowColor = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",.1)");

    ctx.fillStyle = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",")
      .concat(this.color.a)
      .concat(")");
    ctx.font = this.size.concat(" ").concat(this.font);
    ctx.textAlign = "right";
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
  update(deltaTime) {}
}
class Timer {
  constructor() {
    this.color = { r: 255, g: 255, b: 255, a: 1 };
    this.position = {
      y: 35,
      x: 10,
    };
  }
  render(ctx) {
    if (currentState) {
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
      ctx.font = "25px sans-serif";
      ctx.textAlign = "left";
      score = Math.round((Date.now() - gameStart) / 10);
      ctx.fillText("score : ".concat(score), this.position.x, this.position.y);
    }
  }
  update(deltaTime) {
    this.width = gameObjects[0].health * 2;
  }
}
class HealthBar {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.width = 200;
    this.height = 10;
    this.color = { r: 0, g: 255, b: 0, a: 1 };
    this.position = {
      y: 100,
      x: gameWidth / 2 - this.width / 2,
    };
  }

  render(ctx) {
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
    ctx.strokeRect(this.position.x, this.position.y, 200, this.height);
  }
  update(deltaTime) {
    this.width = gameObjects[0].health * 2;
  }
}

class Button {
  constructor(
    x,
    y,
    text,
    font,
    size,
    color,
    bgcolor,
    width,
    height,
    onClick,
    canvas
  ) {
    this.position = { x: x, y: y };
    this.size = size;
    this.font = font;
    this.text = text;
    this.width = width;
    this.height = height;
    this.color = color;
    this.bgcolor = bgcolor;
    this.onClick = onClick;
    this.rect = {
      x: this.position.x - this.width / 2,
      y: this.position.y - this.height / 1.5,
      height: this.height,
      width: this.width,
    };

  }

  render(ctx) {
    ctx.fillStyle = "rgba("
      .concat(this.bgcolor.r)
      .concat(",")
      .concat(this.bgcolor.g)
      .concat(",")
      .concat(this.bgcolor.b)
      .concat(",")
      .concat(this.bgcolor.a)
      .concat(")");
    ctx.fillRect(
      this.position.x - this.width / 2,
      this.position.y - this.height / 1.5,
      this.width,
      this.height
    );
    ctx.fillStyle = "rgba("
      .concat(this.color.r)
      .concat(",")
      .concat(this.color.g)
      .concat(",")
      .concat(this.color.b)
      .concat(",")
      .concat(this.color.a)
      .concat(")");
    ctx.font = this.size.concat(" ").concat(this.font);
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
  update(deltaTime) {}
}


