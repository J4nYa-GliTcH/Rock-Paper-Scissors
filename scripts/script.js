document.querySelector(".move-rock").addEventListener("click", () => {
  game("rock");
});
document.querySelector(".move-paper").addEventListener("click", () => {
  game("paper");
});
document.querySelector(".move-scissors").addEventListener("click", () => {
  game("scissors");
});
document.querySelector(".reset").addEventListener("click", () => {
  resetScore();
});
document.querySelector(".auto").addEventListener("click", () => {
  autoPlay();
});

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loss: 0,
  ties: 0,
};
let autoPlayOn = false;
let intervalId;

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

  if (result === "Win") {
    score.wins++;
  } else if (result === "Loss") {
    score.loss++;
  } else {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".result").innerHTML = result;
  document.querySelector(
    ".game-moves"
  ).innerHTML = `Player <img src="images/${playerMove}-emoji.png"> || <img src="images/${computerMove}-emoji.png"> Computer`;
  showScore();
}

function showScore() {
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.wins} | Losses: ${score.loss} | Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.loss = 0;
  score.ties = 0;
  showScore();
}

function autoPlay() {
  if (!autoPlayOn) {
    intervalId = setInterval(() => {
      playerMove = pickComputerMove();
      game(playerMove);
    }, 1000);
    autoPlayOn = true;
  } else {
    clearInterval(intervalId);
    autoPlayOn = false;
  }
}
