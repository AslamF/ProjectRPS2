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
        return ("Draw! No one wins!");
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        computerScore++;

        cscore.textContent = "Computer Score: " + computerScore;
        return ("You Lose! Rock beats Scissors!");
        
        
    }
    else if (computerSelection === "Rock" && playerSelection === "Paper"){
        playerScore++;
        
        pscore.textContent =  "Player Score: " + playerScore;
        return ("You Win! Paper beats Rock!");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock"){
        computerScore++;

        cscore.textContent = "Computer Score: " + computerScore;
        return ("You Lose! Paper beats Rock!");
        
    }
    else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        playerScore++;
        
        pscore.textContent =  "Player Score: " + playerScore;
        return ("You Win! Scissors beats Paper!");
        
    }
    else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        playerScore++;
  
        pscore.textContent =  "Player Score: " + playerScore;
        return ("You Win! Rock beats Scissors!");
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        computerScore++;

        cscore.textContent = "Computer Score: " + computerScore;
        return ("You Lose! Scissors beats Paper!");
    }
    
};
//console.log(playRound(playerSelection, computerSelection));


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");
const pscore = document.querySelector(".playerScore"); 
const cscore = document.querySelector(".computerScore");
const container = document.querySelector(".results");
const runningScore = document.querySelector(".runningscore");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");
const selection = document.querySelector(".selections");




function disableButtons(){
for (let i =0; i < buttons.length; i++){
    buttons[i].disabled = true;;
}};

/*function createImage(){
    var img = document.createElement("img");
    if (playerSelection === "Rock"){
        img.src = "stone.png";

    }
    else if (playerSelection === "Paper"){
        img.src = "paper.png";
    }
    else if (playerSelection === "Scissors"){
        img.src = "scissors.png";
    }
    //selection.textContent(img);
    selection.appendChild(img);
}
*/
rockButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Rock";
    //createImage();
    playRound();
    results.textContent = playRound(playerSelection, computerSelection);
    gameWinner();
    
    
    
    
} )

paperButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Paper";
    //createImage();
    playRound();
    results.textContent = playRound(playerSelection, computerSelection);
    gameWinner();
    

} )
scissorButton.addEventListener("click",() => {
    const computerSelection = getComputerChoice();
    playerSelection = "Scissors";
    //createImage();
    playRound();
    results.textContent = playRound(playerSelection, computerSelection);
    gameWinner();

} )

function gameWinner(){
if (playerScore === 5){
    results.textContent = "";
    const winner = document.createElement("div");
    winner.textContent = "THE AI HAS LOST YOU WON!";
    results.appendChild(winner);
    disableButtons();
        
}
else if (computerScore ===5){
    results.textContent = "";
    const winner = document.createElement("div");
    winner.textContent = "THE AI HAS WON, YOU LOST";
    results.appendChild(winner);
    disableButtons();
    
}
};

function createImg(){

}