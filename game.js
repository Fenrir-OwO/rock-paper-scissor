let playerScore = 4;
let computerScore = 4;

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizedInt = Math.floor((Math.random() * choices.length));
    

    let randomizedChoice = randomizedInt === 0 ? "rock" : (randomizedInt === 1 ? "paper" : "scissors"); //if-else
    return randomizedChoice;
    
}

function playRound(playerSelection, computerSelection) {
  let log = '';

  if (playerSelection === 'Rock') {
    if (computerSelection === 'Paper') {
      log = 'You Lose! Paper beats Rock';
    } else if (computerSelection === 'Scissors') {
      log = 'You Win! Rock beats Scissors';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Paper') {
    if (computerSelection === 'Scissors') {
      log = 'You Lose! Scissors beats Paper';
    } else if (computerSelection === 'Rock') {
      log = 'You Win! Paper beats Rock';
    } else {
      log = "It's a tie";
    }
  } else if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      log = 'You Lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      log = 'You Win! Scissors beats Paper';
    } else {
      log = "It's a tie";
    }
  }

  return log;
}

function createParagWithText(text) {
  const p = document.createElement('p');
  p.textContent = text;

  return p;
}

function game(playerSelect) {
  let playerSelection = capitalize(playerSelect);
  let computerSelection = getComputerSelection();

  let roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.search('You Win!') > -1) {
    playerScore++;
  } else if (roundResult.search('You Lose!') > -1) {
    computerScore++;
  }

  scorePlayer.textContent = playerScore;
  scoreComputer.textContent = computerScore;
  message.textContent = roundResult;
  selectionPlayer.appendChild(createParagWithText(playerSelection));
  selectionComputer.appendChild(createParagWithText(computerSelection));

  if (playerScore >= 5 && computerScore < 5) {
    message.textContent = 'Game Over. You Win!';
  } else if (playerScore < 5 && computerScore >= 5) {
    message.textContent = 'Game Over. You Lose!';
  }
}

/* Helper Functions */
function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function capitalize(string) {
  return (
    string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1)
  );
}
/* ************************ */