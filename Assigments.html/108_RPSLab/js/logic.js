const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS ="SCISSORS";



function getRandomPick() {
  let chance = Math.random();

  if (chance > 0.66){
      return ROCK;
  } else if  (chance > 0.33){
      return PAPER;
  } else {
      return SCISSORS;
  }

}

function getResultText(computerPick, playerPick){
  const TIE = "Are You A Mind Reader!";
  const WIN = " You Win!";
  const LOSE = " You Suck, Try Again!";


  if (computerPick == playerPick){
    return TIE;
}


if (computerPick == PAPER && playerPick == ROCK) {
  return LOSE;
} else if (computerPick == PAPER && playerPick == SCISSORS) {
  return WIN;
}

if (computerPick == ROCK && playerPick == SCISSORS) {
  return LOSE;
} else if (computerPick == ROCK && playerPick == PAPER) {
  return WIN;
}

if (computerPick == SCISSORS && playerPick == PAPER) {
  return LOSE;
} else if (computerPick == SCISSORS && playerPick == ROCK) {
  return WIN;
}
}

function playGame(yourPick){
  let myPick = getRandomPick();

  let rockLeft = document.getElementById("rockLeft");
  let paperLeft = document.getElementById("paperLeft");
  let scissorsLeft = document.getElementById("scissorsLeft");
  let rockRight = document.getElementById("rockRight");
  let paperRight = document.getElementById("paperRight");
  let scissorsRight = document.getElementById("scissorsRight");

  let yourPickText = document.getElementById("yourPickText");
  let myPickText = document.getElementById("myPickText");

  yourPickText.innerHTML = yourPick;
  switch(yourPick) {
    case ROCK:
      rockLeft.classList.add("selected");
      break;
    case PAPER:
      paperLeft.classList.add("selected");
      break;
    case SCISSORS:
      scissorsLeft.classList.add("selected");
      break;
  }
  myPickText.innerHTML = myPick;
  switch(myPick) {
    case ROCK:
      rockRight.classList.add("selected");
      break;
    case PAPER:
      paperRight.classList.add("selected");
      break;
    case SCISSORS:
      scissorsRight.classList.add("selected");
      break;
  }

let result = document.getElementById("result");
result.innerHTML = getResultText(myPick, yourPick);
}

function setUp(){
  let game = document.getElementById("game");
  game.onanimationend = function(){
    this.classList.remove("animate");
  }

  let closers = document.querySelectorAll(".closer");
  for (let i = 0; i< closers.length; i ++){
    let closer = closers[i];
    closer.onclick = function(){
      let popupContainer = document.getElementById("popupContainer");
      popupContainer.classList.remove("popped");
      resetGame();
    };
  }
}
function resetGame(){
  let rockLeft = document.getElementById("rockLeft");
  let paperLeft = document.getElementById("paperLeft");
  let scissorsLeft = document.getElementById("scissorsLeft");
  let rockRight = document.getElementById("rockRight");
  let paperRight = document.getElementById("paperRight");
  let scissorsRight = document.getElementById("scissorsRight");

  let yourPickText = document.getElementById("yourPickText");
  let myPickText = document.getElementById("myPickText");

yourPickText.innerHTML = "";
myPickText.innerHTML = "";

rockLeft.classList.remove("selected");
paperLeft.classList.remove("selected");
scissorsLeft.classList.remove("selected");
rockRight.classList.remove("selected");
paperRight.classList.remove("selected");
scissorsRight.classList.remove("selected");

let result = document.getElementById("result")
result.innerHTML = "";
}

function popAndPlay(yourPick){
  let popupContainer = document.getElementById("popupContainer");
  let game = document.getElementById("game");

popupContainer.classList.add("popped");
game.classList.add("animate");

playGame(yourPick);
}
