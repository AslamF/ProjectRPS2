let playerCount = 0;
let computerCount = 0;

// PART 1 - FUNCTION THAT PRODUCES A RANDOM CHOICE FOR THE COMPUTER 

function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    const generate = choices[Math.floor(Math.random() * choices.length)];
    return generate;
}

// PART 2 - A SINGLE GAME OF ROCK/PAPER/SCISSOR, YOU DONT NEED TO ADD PLAYER INPUT AT THIS POINT

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return ("its a draw! no one wins!");
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        computerCount++;
        return ("You Lose! Rock beats scissors");
        
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper"){
        playerCount++;
        return ("You Win! Paper beats rock!");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock"){
        computerCount++;
        return ("You Lose! Paper beats Rock");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        playerCount++;
        return ("You Win! Scissors beats Paper!");
        
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        playerCount++;
        return ("You Win! Rock beats scissors");
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        computerCount++;
        return ("You Lose! Scissors beats paper");
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock,Paper, or Scissors? ");
        let newText = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        playerSelection = newText;
        const computerSelection = getComputerChoice();
        (playRound(playerSelection, computerSelection));
    }
    if (playerCount > computerCount){
        return ("You beat comp!");
    }
    else if (playerCount < computerCount){
        return ("you lost");
    }
    else{
        return ("its a tie!?!?!?!!?");
    }
}
console.log(game());