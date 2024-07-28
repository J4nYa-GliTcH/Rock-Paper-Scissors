function game() {
  const computerMove = computerMove();
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
  return result;
}

function computerMove() {
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

document.querySelector("#move-rock").addEventListener("click", function () {
  alert("Hello World!");
});
