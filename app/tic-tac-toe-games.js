// game code

let list = [];
list.length = 9;
let message = document.getElementById("message-id");
message.innerHTML = "Start Your Move";
let botRndMove;
let newGameBtn = document.getElementById("start-new-game");
let isWinner = false;
let randomId;
let tableElement = document.getElementById("table");
let blockGameElement;

function myMove(cell, arrayId) {
  message.innerHTML = "";
  cell.classList.add("my-active-cell");
  document.getElementById(arrayId).innerHTML = "x";
  if (list[arrayId] == null) {
    list[arrayId] = "x";
  } else message.innerHTML = "This cell has been already taken!";

  checkWinner();

  if (isWinner == false) {
    // message.textContent !== "Computer Won!"
    setTimeout(function () {
      botMove();
    }, 1000);
  } else {
    console.log("game over :)");
  }
  console.log(message);
  console.log(list);
}

function botMove() {
  randomId = Math.floor(Math.random() * list.length);

  if (list[randomId] == null) {
    list[randomId] = 0;
    document.getElementById(randomId).classList.add("bot-active-cell");
    document.getElementById(randomId).innerHTML = "o";
  } else botMove();

  // do {
  //   list[randomId] = 0;
  //   document.getElementById(randomId).classList.add("bot-active-cell");
  //   document.getElementById(randomId).innerHTML = "o";
  // } while (list[randomId] == null);

  checkWinner();
}

function startNewGame() {
  newGameBtn.innerHTML = `<div class="start-new-game-btn" onclick="startGame()">Start New Game</div>`;
}

function startGame() {
  console.log("new game started");
  newGameBtn.innerHTML = "";
  list = [];
  list.length = 9;
  isWinner = false;

  var cell = document.getElementsByTagName("td");
  for (i = 0; i < list.length; i++) {
    cell[i].className = "";
    cell[i].innerHTML = "";
    var message = document.getElementById("message-id");
    message.innerHTML = "Start Your Move";
  }
}

function blockGame() {
  // blockGamу blockGameElement.innerHTML = "sddsd";
}

function checkWinner() {
  // User winning combinations
  if (list[0] == "x" && list[1] == "x" && list[2] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[3] == "x" && list[4] == "x" && list[5] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[6] == "x" && list[7] == "x" && list[8] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[0] == "x" && list[3] == "x" && list[6] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[1] == "x" && list[4] == "x" && list[7] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[2] == "x" && list[5] == "x" && list[8] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[0] == "x" && list[4] == "x" && list[8] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[2] == "x" && list[4] == "x" && list[6] == "x") {
    message.innerHTML = "You Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  // Computer winning combinations
  if (list[0] == "0" && list[1] == "0" && list[2] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[3] == "0" && list[4] == "0" && list[5] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[6] == "0" && list[7] == "0" && list[8] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[0] == "0" && list[3] == "0" && list[6] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[1] == "0" && list[4] == "0" && list[7] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[2] == "0" && list[5] == "0" && list[8] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[0] == "0" && list[4] == "0" && list[8] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
  if (list[2] == "0" && list[4] == "0" && list[6] == "0") {
    message.innerHTML = "Computer Won!";
    isWinner = true;
    blockGame();
    startNewGame();
  }
}
