function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    const generate = choices[Math.floor(Math.random() * choices.length)];
    return generate;
};


let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0; 
//const computerSelection = getComputerChoice();



 function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return ("its a draw! no one wins!");
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        computerScore++;

        cscore.textContent = "Computer Score: " + computerScore;
        return ("You Lose! Rock beats scissors");
        
        
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper"){
        playerScore++;
        
        pscore.textContent =  "Player Score: " + playerScore;
        return ("You Win! Paper beats rock!");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock"){
        computerScore++;

        cscore.textContent = "Computer Score: " + computerScore;
        return ("You Lose! Paper beats Rock");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        playerScore++;
        
        pscore.textContent =  "Player Score: " + playerScore;
        return ("You Win! Scissors beats Paper!");
        
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        playerScore++;
  
        pscore.textContent =  "Player Score: " + playerScore;
        return ("You Win! Rock beats scissors");
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        computerScore++;

        cscore.textContent = "Computer Score: " + computerScore;
        return ("You Lose! Scissors beats paper");
    }
    
};
//console.log(playRound(playerSelection, computerSelection));


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const pscore = document.querySelector(".playerScore"); 
const cscore = document.querySelector(".computerScore");
const container = document.querySelector(".results");
const runningScore = document.querySelector(".running-score");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");

function disableButtons(){
for (let i =0; i < buttons.length; i++){
    buttons[i].disabled = true;;
}};

rockButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Rock";
    playRound();
    results.textContent = playRound(playerSelection, computerSelection);
    gameWinner();
    /*const score = document.querySelector(".playerScore");
    score.textContent = playerScore; */
    
    
    
} )

paperButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Paper";
    playRound();
    results.textContent = playRound(playerSelection, computerSelection);
    gameWinner();
    

} )
scissorButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Scissors";
    playRound();
    results.textContent = playRound(playerSelection, computerSelection);
    gameWinner();

} )

function gameWinner(){
if (playerScore === 5){
    
    const winner = document.createElement("div");
    winner.textContent = "CONGRATS YOU BEAT THE AI!";
    runningScore.appendChild(winner);
    disableButtons();
        
}
else if (computerScore ===5){
    const winner = document.createElement("div");
    winner.textContent = "THE AI HAS WON, YOU LOST";
    runningScore.appendChild(winner);
    disableButtons();
    
}
};



