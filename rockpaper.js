let winConditions = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

const buttons = document.querySelectorAll("button.rps");
const Player = document.getElementById("Player");
const Computer = document.getElementById("Computer");
const Tie = document.getElementById("Tie");

var computerScore = 0;
var playerScore = 0;
var tieScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", event => {
    let result = playRound(event.target.value, computerPlay());
    result === 1 ? playerScore++ : result === -1 ? computerScore++ : tieScore++;
    Computer.innerHTML = `Computer Score: ${computerScore}`;
    Player.innerHTML = `Player Score: ${playerScore}`;
    Tie.innerHTML = `Tie Score: ${tieScore}`;
    playerScore === 5
      ? alert("You win!")
      : computerScore === 5
      ? alert("Computer won!")
      : null;
  });
});

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", event => {
  computerScore = 0;
  playerScore = 0;
  tieScore = 0;
  Computer.innerHTML = `Computer Score: ${computerScore}`;
  Player.innerHTML = `Player Score: ${playerScore}`;
  Tie.innerHTML = `Tie Score: ${tieScore}`;
});

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = 0;
  } else if (winConditions[playerSelection] === computerSelection) {
    result = 1;
  } else {
    result = -1;
  }

  return result;
}

// function game(length) {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < length; i++) {
//     let playerSelection = prompt("Enter your hand!:").toLowerCase();
//     let computerSelection = computerPlay();
//     alert(
//       `Player hand: ${playerSelection} vs. Computer hand: ${computerSelection}`
//     );
//     let resolution = playRound(playerSelection, computerSelection);
//     if (resolution === 1) {
//       playerScore += 1;
//       alert("You won this round!");
//     } else if (resolution === 0) {
//       alert("You tied this round!");
//       continue;
//     } else {
//       computerScore += 1;
//       alert("You lost this round!");
//     }
//     alert(`Your score: ${playerScore}, Computer score: ${computerScore}`);
//   }

//   return playerScore === computerScore
//     ? alert("Tied the game")
//     : playerScore > computerScore
//     ? alert("You win the game!")
//     : alert("You lose the game!");
// }

// console.log(game());
