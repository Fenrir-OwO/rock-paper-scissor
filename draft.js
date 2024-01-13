let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
console.log("player chose------->",playerSelection);

let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// let roll = playRound(playerSelection,computerSelection);
console.log("ROLL", roll);


function playRound(playerSelection, computerSelection) {
    // your code here!
    let result = playerSelection === computerSelection ? "tie" : (playerSelection === "rock" && computerSelection === "paper" ? "computer wins" : (playerSelection === "paper" && computerSelection === "scissor" ? "computer wins" : (playerSelection === "scissor" && computerSelection === "rock" ? "computer wins" : "player wins")))

    return result;
}




function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizedInt = Math.floor((Math.random() * choices.length));
    

    let randomizedChoice = randomizedInt === 0 ? "rock" : (randomizedInt === 1 ? "paper" : "scissor"); //if-else
    console.log("computer chose----->",randomizedChoice);
    return randomizedChoice;
    
}


function game(roll){
    playerWin = 0;
    
    computerWin = 0;
    

    if (roll === "tie"){
        console.log("Tie, play next round");
    }
    else {
        if (roll === "player wins"){
            playerWin += 1;
        }
        else {
            computerWin += 1;
        }
        
    }

    if (playerWin === 5){
        console.log("You are the Winner! Please Play Again.");
        playerWin = 0;
        computerWin = 0;
    }
    else if(computerWin === 5){
        console.log("Computer is the Winner! Better Luck Next Time.");
        playerWin = 0;
        computerWin = 0;
    }
    console.log(playerWin);
    console.log(computerWin);
}


game();


