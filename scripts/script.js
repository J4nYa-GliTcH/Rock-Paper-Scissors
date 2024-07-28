document.querySelector(".move-rock").addEventListener("click", () => {
  game("rock");
});
document.querySelector(".move-paper").addEventListener("click", () => {
  game("paper");
});
document.querySelector(".move-scissors").addEventListener("click", () => {
  game("scissors");
});

function pickComputerMove() {
  let computerMove = Math.random();
  if (computerMove >= 0 && computerMove < 1 / 3) {
    computerMove = "rock";
  } else if (computerMove >= 1 / 3 && computerMove < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}

function game(playerMove) {
  const computerMove = pickComputerMove();
  let result;
  if (computerMove === "rock") {
    if (playerMove === "rock") {
      result = "Tie";
    } else if (playerMove === "paper") {
      result = "Win";
    } else {
      result = "Loss";
    }
  } else if (computerMove === "paper") {
    if (playerMove === "rock") {
      result = "Loss";
    } else if (playerMove === "paper") {
      result = "Tie";
    } else {
      result = "Win";
    }
  } else {
    if (playerMove === "rock") {
      result = "Win";
    } else if (playerMove === "paper") {
      result = "Loss";
    } else {
      result = "Tie";
    }
  }
  document.querySelector(".result").innerHTML = result;
  document.querySelector(
    ".game-moves"
  ).innerHTML = `Player <img src="images/${playerMove}-emoji.png"> || <img src="images/${computerMove}-emoji.png"> Computer`;
  return result;
}
