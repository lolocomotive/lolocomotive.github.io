class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          player.moveLeft();
          break;
        case 38:
          player.moveUp();
          break;
        case 39:
          player.moveRight();
          break;
        case 40:
          player.moveDown();
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          if (player.velX < 0) {
            player.stopX();
          }
          break;
        case 38:
          if (player.velY < 0) {
            player.stopY();
          }
          break;
        case 39:
          if (player.velX > 0) {
            player.stopX();
          }
          break;
        case 40:
          if (player.velY > 0) {
            player.stopY();
          }
          break;
      }
    });
  }
}

function click() {
  if (uiObjects[1] instanceof Button) {
    var btn = uiObjects[1];
    var mousePos = getMousePos(canvasFinal, event);
    if(isInside(mousePos, btn.rect)){
      start(0);
    }
  }
}

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}
function isInside(pos, rect) {
  if (pos.x > rect.x) {
    if (pos.y > rect.y) {
      if (pos.y < rect.y + rect.height) {
        if (pos.x < rect.x + rect.width) {
          return true;
        }
      }
    }
  }
  return false;
}
