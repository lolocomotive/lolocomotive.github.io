const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;
const GAME_STATE = { mainMenu: 0, running: 1, died: 2, pauseMenu: 3 };

let numEnemies = 0;
let numBasicEnemies = 0;
let numFastEnemies = 0;
let canvasGameRaw = document.getElementById("game");
let ctx = canvasGameRaw.getContext("2d");
let canvasPost = document.getElementById("game-post");
let ctxPost = canvasPost.getContext("2d");
let canvasUI = document.getElementById("ui");
let ctxUI = canvasUI.getContext("2d");
let canvasFinal = document.getElementById("result");
let ctxFinal = canvasFinal.getContext("2d");
let score = 0;
let currentState = GAME_STATE.mainMenu;
let currentLevel = 0;
let gameStart = 0;
let lastTime = 0;

var gameObjects = [];
var uiObjects = [];

function drawMainMenu() {
  uiObjects = [
    new UITextSimpleCenter(GAME_WIDTH / 2, 40, "Menu", "sans-serif", "40px", {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    }),
    new Button(
      GAME_WIDTH / 2,
      250,
      "Start",
      "sans-serif",
      "40px",
      {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
      {
        r: 100,
        g: 100,
        b: 100,
        a: 1,
      },
      300,
      75,
      start,
      canvasFinal
    ),
  ];
}

function addEnemy(type) {
  numEnemies++;
  switch (type) {
    case "basic":
      numBasicEnemies++;
      gameObjects[numEnemies] = new BasicEnemy(GAME_WIDTH, GAME_HEIGHT);
      break;
    case "fast":
      numFastEnemies++;
      gameObjects[numEnemies] = new FastEnemy(GAME_WIDTH, GAME_HEIGHT);
  }
}

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.fillStyle = "black";
  ctx.fillStyle = "";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctx.shadowBlur = 10;

  switch (currentState) {
    case GAME_STATE.mainMenu:
      drawMainMenu();
      break;
    case GAME_STATE.pauseMenu:
      drawPauseMenu();
      break;
    case GAME_STATE.died:
      death();
      break;
    case GAME_STATE.running:
      gameObjects.forEach((element) => element.update(deltaTime));
      gameObjects.forEach((element) => element.render(ctx));
      break;
  }

  postProcess(canvasGameRaw, ctxPost, OPERATIONS.default);

  ctxUI.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  uiObjects.forEach((element) => element.render(ctxUI));
  uiObjects.forEach((element) => element.update(deltaTime));

  ctxFinal.drawImage(canvasGameRaw, 0, 0);
  ctxFinal.drawImage(canvasPost, 0, 0);
  ctxFinal.drawImage(canvasUI, 0, 0);
  requestAnimationFrame(gameLoop);
}

function nextPhase() {
  if (currentState === GAME_STATE.running) {
    currentPhase += 1;
    var BETA;
    var FETA;
    switch (currentPhase) {
      case 1:
        BETA = 3;
        break;
      case 2:
        FETA = 1;
        BETA = 1;
        break;
      case 3:
        FETA = 3;
        BETA = 3;
      case 4:
        BETA = 10;
        FETA = 20;
      case 5:
        BETA = 50;
        FETA = 20;
    }
    for (i = 0; i < BETA; i++) {
      addEnemy("basic");
    }
    for (i = 0; i < FETA; i++) {
      addEnemy("fast");
    }
    setTimeout(nextPhase, 5000 + currentPhase * 1000);
  }
}

function death() {
  uiObjects = [
    new UITextSimpleCenter(
      GAME_WIDTH / 2,
      100,
      "YOU DIED",
      "sans-serif",
      "70px",
      {
        r: 255,
        g: 0,
        b: 0,
        a: 1,
      }
    ),
    new UITextSimpleCenter(
      GAME_WIDTH / 2,
      130,
      "reload page to play again",
      "sans-serif",
      "15px",
      {
        r: 255,
        g: 0,
        b: 0,
        a: 1,
      }
    ),
    new UITextSimpleRight(
      GAME_WIDTH / 2,
      170,
      "Your score : ",
      "sans-serif",
      "20px",
      {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
    new UITextSimpleLeft(GAME_WIDTH / 2, 170, score, "sans-serif", "20px", {
      r: 0,
      g: 255,
      b: 255,
      a: 1,
    }),
    new UITextSimpleRight(
      GAME_WIDTH / 2,
      190,
      "Total enemies : ",
      "sans-serif",
      "20px",
      {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
    new UITextSimpleLeft(
      GAME_WIDTH / 2,
      190,
      numEnemies,
      "sans-serif",
      "20px",
      {
        r: 0,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
    new UITextSimpleRight(
      GAME_WIDTH / 2,
      210,
      "Total basic enemies : ",
      "sans-serif",
      "20px",
      {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
    new UITextSimpleLeft(
      GAME_WIDTH / 2,
      210,
      numBasicEnemies,
      "sans-serif",
      "20px",
      {
        r: 0,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
    new UITextSimpleRight(
      GAME_WIDTH / 2,
      230,
      "Total fast enemies : ",
      "sans-serif",
      "20px",
      {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
    new UITextSimpleLeft(
      GAME_WIDTH / 2,
      230,
      numFastEnemies,
      "sans-serif",
      "20px",
      {
        r: 0,
        g: 255,
        b: 255,
        a: 1,
      }
    ),
  ];
  document.getElementById("music").volume = 0.1;
  gameObjects = [];
  ctx.fillStyle = "black";
  ctx.fillStyle = "";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  ctxUI.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  uiObjects.forEach((element) => element.render(ctxUI));
  gameObjects.forEach((element) => element.render(ctx));
  postProcess(canvasGameRaw, ctxPost);
  ctxFinal.drawImage(canvasGameRaw, 0, 0);
  ctxFinal.drawImage(canvasPost, 0, 0);
  ctxFinal.drawImage(canvasUI, 0, 0);
  console.log("you died!");
}

function start(level) {
  currentLevel = level;
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  currentState = GAME_STATE.running;
  document.getElementById("music").play();
  currentPhase = 0;
  gameStart = Date.now();
  uiObjects = [
    new UITextSimpleCenter(GAME_WIDTH / 2, 40, "Wave", "sans-serif", "40px", {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    }),
    new HealthBar(GAME_WIDTH, GAME_HEIGHT),
    new Timer(),
  ];
  gameObjects = [];
  var player = new Player(GAME_WIDTH, GAME_HEIGHT);
  new InputHandler(player);
  gameObjects[0] = player;
  ctx.shadowColor = "black";
  addEnemy("basic");

  setTimeout(nextPhase, 5000);
}

requestAnimationFrame(gameLoop);