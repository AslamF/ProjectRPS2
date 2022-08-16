
function getCompterChoice(){
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
console.log(getCompterChoice());