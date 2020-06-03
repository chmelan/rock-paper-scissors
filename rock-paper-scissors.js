let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;
  if (player == computer) {
    ++playerScore;
    ++computerScore;
    return updateRoundDescriptor("You Tied!");
  } else if (player == "rock" && computer == "scissors") {
    ++playerScore;
    return updateRoundDescriptor("You win! Rock beats Scissors!");
  } else if (player == "paper" && computer == "rock") {
    ++playerScore;
    return updateRoundDescriptor("You win! Paper beats Rock!");
  } else if (player == "scissors" && computer == "paper") {
    ++playerScore;
    return updateRoundDescriptor("You win! Scissors beats Paper!");
  } else if (player == "rock" && computer == "paper") {
    ++computerScore;
    return updateRoundDescriptor("You lose! Paper beats Rock!");
  } else if (player == "paper" && computer == "scissors") {
    ++computerScore;
    return updateRoundDescriptor("You lose! Scissors beats Paper!");
  } else if (player == "scissors" && computer == "rock") {
    ++computerScore;
    return updateRoundDescriptor("You lose! Rock beats Scissors!");
  }
}

function updateRoundDescriptor(message) {
  const updateRoundDescriptor = document.querySelector("#roundDescriptor");
  updateRoundDescriptor.textContent = message;
}

function updatePlayerScore() {
  const updatePlayerScore = document.querySelector("#playerScore");
  updatePlayerScore.textContent = playerScore;
}

function updateComputerScore() {
  const updateComputerScore = document.querySelector("#computerScore");
  updateComputerScore.textContent = computerScore;
}

function checkScore(scoreToWin) {
  if (playerScore == scoreToWin && computerScore == scoreToWin) {
    tieGame();
  } else if (playerScore == scoreToWin) {
    playerWin();
  } else if (computerScore == scoreToWin) {
    computerWin();
  }

  return;
}

function playerWin() {
  const game = document.querySelector("#game");
  removeAllChildren(game);
  game.textContent = `You Win ${playerScore} - ${computerScore}`;
  createRestartButton();
  return;
}

function computerWin() {
  const game = document.querySelector("#game");
  removeAllChildren(game);
  game.textContent = `You lose! ${playerScore} - ${computerScore}`;
  createRestartButton();
  return;
}

function tieGame() {
  const game = document.querySelector("#game");
  removeAllChildren(game);
  game.textContent = `You Tied! ${playerScore} - ${computerScore}`;
  createRestartButton();
  return;
}

function removeAllChildren(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.lastChild);
  }
}

function createRestartButton() {
  const btn = document.createElement("BUTTON");
  btn.innerHTML = "New Game?";
  btn.id = "newGameBtn";
  document.body.appendChild(btn);
  btn.addEventListener("click", (e) => {
    location.reload();
  });
}

const clickPlayRound = document.querySelectorAll(".playerButton");
clickPlayRound.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(button.id, computerPlay());
    updatePlayerScore();
    updateComputerScore();
    checkScore(5);
  });
});
