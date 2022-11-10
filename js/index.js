
function game(number) {
    let score = playRound(number);
    return console.log("You won", score, "out of", number, "games!");
}
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
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
    let wins = 0; 
    for (let x = 0; x < number; x++)
    {
        let user = prompt("Select you action (Rock/Paper/Scissor)");
        let computer = getComputerChoice();
        console.log("The computer has chosen:", computer, "and you chose:", user);

        if (compareActions(user, computer) == true)
        {
            wins++;
        }
    }
    return wins;
}
function compareActions(userAction, computerAction){
    if (userAction == computerAction)
    {
        console.log("Both player chose the same. Its a tie!")
        return false;
    }
    else if (userAction.toLowerCase() == "rock" && computerAction.toLowerCase() == "scissor")
    {
        console.log("Your rock crushes the computers scissors! You Win!")
        return true;
    }
    else if (userAction.toLowerCase() == "rock" && computerAction.toLowerCase() == "paper")
    {
        console.log("Your rock is covered by the computers paper! You Lose!")
        return false;
    }
    else if (userAction.toLowerCase() == "scissor" && computerAction.toLowerCase() == "paper")
    {
        console.log("Your scissor cuts the computers paper! You Win!")
        return true;
    }  
    else if (userAction.toLowerCase() == "scissor" && computerAction.toLowerCase() == "rock")
    {
        console.log("Your scissor is crushed by the computers rock! You Lose!")
        return false;
    }    
    else if (userAction.toLowerCase() == "paper" && computerAction.toLowerCase() == "rock")
    {
        console.log("Your paper covers the computers rock! You Win!")
        return true;
    } 
    else if (userAction.toLowerCase() == "paper" && computerAction.toLowerCase() == "scissor")
    {
        console.log("Your paper is cut by the computers scissor! You Lose!")
        return false;
    }  
}
function gameRoundTracker() {
    score++;
}
function displayRound(){
    let x = document.getElementById('gameRound').value;
    return x;
} 