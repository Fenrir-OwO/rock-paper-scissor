let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizedInt = Math.floor((Math.random() * choices.length));
    

    let randomizedChoice = randomizedInt === 0 ? "rock" : (randomizedInt === 1 ? "paper" : "scissors"); //if-else
    return randomizedChoice;
    
}

function playRound(playerSelection, computerSelection) {
    let result = playerSelection === computerSelection ? "tie" : (playerSelection === "rock" && computerSelection === "paper" ? "computer wins" : (playerSelection === "paper" && computerSelection === "scissors" ? "computer wins" : (playerSelection === "scissors" && computerSelection === "rock" ? "computer wins" : "player wins")))

    if (result === "tie"){
        console.log("TIE! Round is cancelled!")
    }
    else if (result === "computer wins"){
        computerScore += 1;
        console.log("Computer Wins The Round!")
    }
    else if(result === "player wins"){
        playerScore += 1;
        console.log("Player Wins The Round!")
    }
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
