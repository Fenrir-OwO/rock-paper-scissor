function playRound(playerSelection, computerSelection) {
    // your code here!
    let result = playerSelection === computerSelection ? "tie" : (playerSelection === "rock" && computerSelection === "paper" ? "computer wins" : (playerSelection === "paper" && computerSelection === "scissor" ? "computer wins" : (playerSelection === "scissor" && computerSelection === "rock" ? "computer wins" : "player wins")))

    console.log("player chose------->",playerSelection);
    return result;
};
   
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomizedInt = Math.floor((Math.random() * choices.length));
    

    let randomizedChoice = randomizedInt === 0 ? "rock" : (randomizedInt === 1 ? "paper" : "scissor"); //if-else
    console.log("computer chose----->",randomizedChoice);
    return randomizedChoice;
    
}


function game(result){
    playerWin = 0;
    computerWin = 0;

    if (result === "tie"){
        console.log("Tie, play next round");
    }
    else {
        if (result === "player wins"){
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
}


game();



//the Math.random() function randomly chooses a number greater than 0, but lesser than 1. We are multiplying that number with the lenght of the choices we have, in this case, 3. This gives us a random number greater than 0 but lesser than 3. We then use the Math.floor() to discard the digits after the decimal points and only take the value, so now it returns 0,1 or 2 randomly. Finally the +1 was just to make the 0 go away and get a 3 randomly in that place. Final outcome 1,2 or 3.