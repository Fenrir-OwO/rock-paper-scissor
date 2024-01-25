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

function game(){
    let playerSelection = prompt("Rock, Paper or Scissors").toLowerCase()

    if (!["rock","paper","scissors"].includes(playerSelection)){
        console.log("Invalid input!");
        errorInput();
    }

    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
}

function reCall(){
    while (playerScore < 5 && computerScore < 5){
        game();
        if (playerScore === 5){
            console.log("Congratulation! You Win!");
            throw waste();
        }
        else if(computerScore === 5){
            console.log("You Lost! Better Luck Next Time.")
            throw waste();
        }
            
    }
}


reCall();


function errorInput(){
    reCall();
}

function waste(){
    console.log("There were error rounds");
}

//the Math.random() function randomly chooses a number greater than 0, but lesser than 1. We are multiplying that number with the lenght of the choices we have, in this case, 3. This gives us a random number greater than 0 but lesser than 3. We then use the Math.floor() to discard the digits after the decimal points and only take the value, so now it returns 0,1 or 2 randomly. Finally the +1 was just to make the 0 go away and get a 3 randomly in that place. Final outcome 1,2 or 3.