let humanScore = 0;
let computerScore = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let value = getRandomInt(3);
    let choice = ""
    switch (value) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor";
            break;
    }
    return choice;
}

function getHumanChoice(){
    let choice = prompt("Enter your choice").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    if (computerChoice == "rock"){
        if (humanChoice == "paper"){
            console.log("Human wins!")
            humanScore++;
        }
        else if (humanChoice == "scissor"){
            console.log("Computer wins!")
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }
    else if (computerChoice == "paper"){
        if (humanChoice == "scissor"){
            console.log("Human wins!")
            humanScore++;
        }
        else if (humanChoice == "rock"){
            console.log("Computer wins!")
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }
    else if (computerChoice == "scissor"){
        if (humanChoice == "rock"){
            console.log("Human wins!")
            humanScore++;
        }
        else if (humanChoice == "paper"){
            console.log("Computer wins!")
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }
    console.log(`End of Round. Human chose ${humanChoice} Computer chose ${computerChoice}
        Human Score: ${humanScore}
        Computer Score: ${computerScore}`)
}

function playGame(){
    let flag = 5;
    let humanSelection = "";
    let computerSelection = "";
    while (flag > 0){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        flag--;
    }
    console.log(`Game Over
        Final Score:
        Human: ${humanScore}
        Computer: ${computerScore}`);
    if (computerScore === humanScore){
        console.log("Game ends in Draw");
    }
    else if (computerScore > humanScore){
        console.log("Computer Wins");
    }
    else {
        console.log("Human Wins");
    }
}

playGame();



