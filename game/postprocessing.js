const OPERATIONS = { default: 0, darken: 1, brighten: 2, vignette: 3 };

function postProcess(canvasRaw, ctxPP, operation) {
  //ctxPP.drawImage(canvasRaw, 0, 0);
  ctxPP.clearRect(0, 0, 800, 600);
  switch (operation) {
    case OPERATIONS.default:
      ctxPP.fillStyle = "rgba(0,0,255,.1)";
      ctxPP.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      break;
    case OPERATIONS.darken:
      ctxPP.fillStyle = "rgba(0,0,0,.5)";
      ctxPP.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      break;
    case OPERATIONS.brighten:
      ctxPP.fillStyle = "rgba(255,255,255,.5)";
      ctxPP.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      break;
    case OPERATIONS.vignette:
      break;
  }
  ctxPP.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}
