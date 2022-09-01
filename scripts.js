function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    const generate = choices[Math.floor(Math.random() * choices.length)];
    return generate;
};
let computerSelection
let playerSelection 
//const computerSelection = getComputerChoice();



 function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return ("its a draw! no one wins!");
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        
        return ("You Lose! Rock beats scissors");
        
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper"){
        
        return ("You Win! Paper beats rock!");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock"){
        
        return ("You Lose! Paper beats Rock");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        
        return ("You Win! Scissors beats Paper!");
        
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        
        return ("You Win! Rock beats scissors");
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        
        return ("You Lose! Scissors beats paper");
    }
    
};
//console.log(playRound(playerSelection, computerSelection));


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");








rockButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Rock";
    playRound();
    console.log(playRound(playerSelection, computerSelection));
} )

paperButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Paper";
    playRound();
    console.log(playRound(playerSelection, computerSelection));
} )
scissorButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Scissors";
    playRound();
    console.log(playRound(playerSelection, computerSelection));
} )