let score = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let cpChoice = choices[Math.floor(Math.random() * choices.length)];
    return cpChoice;
}
function gameNumbers() {
    let x = Number(document.getElementById('gameAmountsField').value);
    let amount;
    if (x > 1) 
    {
        return amount = x;
    }
    else 
    {
        return amount = 1;
    }
}
function playRound(number) {
    console.log('made it here');
    console.log(number);
    for (let x = 0; x < number; x++)
    {
        console.log(getComputerChoice());
        console.log(number);

    }
}
function gameRoundTracker() {
    score++;
}
function displayRound(){
    let x = document.getElementById('gameRound').value;
    return x;
} 