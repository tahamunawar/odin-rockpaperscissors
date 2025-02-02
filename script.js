let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";
let roundWinner = "";

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let value = getRandomInt(3);
    let choice = ""
    switch (value) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissor";
            break;
    }
    return choice;
}

function playRound(humanChoice){
    computerChoice = getComputerChoice();
    if (computerChoice == "Rock"){
        if (humanChoice == "Paper"){
            console.log("Human wins!")
            humanScore++;
            roundWinner = "Human";
        }
        else if (humanChoice == "Scissor"){
            console.log("Computer wins!")
            computerScore++;
            roundWinner = "Computer";
        }
        else {
            console.log("Draw");
            roundWinner = "Draw";
        }
    }
    else if (computerChoice == "Paper"){
        if (humanChoice == "Scissor"){
            console.log("Human wins!")
            humanScore++;
            roundWinner = "Human";
        }
        else if (humanChoice == "Rock"){
            console.log("Computer wins!")
            computerScore++;
            roundWinner = "Computer";
        }
        else {
            console.log("Draw");
            roundWinner = "Draw";
        }
    }
    else if (computerChoice == "Scissor"){
        if (humanChoice == "Rock"){
            console.log("Human wins!")
            humanScore++;
            roundWinner = "Human";
        }
        else if (humanChoice == "Paper"){
            console.log("Computer wins!")
            computerScore++;
            roundWinner = "Computer";
        }
        else {
            console.log("Draw");
            roundWinner = "Draw";
        }
    }
    line3.textContent = `Computer Score: ${computerScore}`;
    line4.textContent = `Human Score: ${humanScore}`;
    line5.textContent = `Human Selection: ${humanChoice}`;
    line6.textContent = `Computer Selection: ${computerChoice}`;
    line7.textContent = `Round Winner: ${roundWinner}`;
    if (humanScore == 5){
        const finalLine = document.createElement("p");
        finalLine.textContent = "Game Over. Human Wins!";
        body.append(finalLine);
        const buttonList = document.querySelectorAll("button"); 
        for (let i=0;i<buttonList.length;i++){
            buttonList[i].disabled=true;
        }
    }
    
    if (computerScore == 5){
        const finalLine = document.createElement("p");
        finalLine.textContent = "Game Over. Computer Wins!"
        body.append(finalLine);
        const buttonList = document.querySelectorAll("button"); 
        for (let i=0;i<buttonList.length;i++){
            buttonList[i].disabled=true;
        }
    }
}

const body = document.querySelector("body");
const buttonBox = document.createElement("div");
buttonBox.classList.add("button-box");

const line1 = document.createElement("h1");
line1.textContent = "Welcome to Rock Paper Scissors";
const line2 = document.createElement("h2");
line2.textContent = "Click on the buttons below to play a round. First to 5 Wins!";
const line3 = document.createElement("h3");
line3.textContent = `Computer Score: ${computerScore}`;
const line4 = document.createElement("h3");
line4.textContent = `Human Score: ${humanScore}`;

const roundStats = document.createElement("div");
const line5 = document.createElement("p");
line5.textContent = `Human Selection: ${humanChoice}`;
const line6 = document.createElement("p");
line6.textContent = `Computer Selection: ${computerChoice}`;
const line7 = document.createElement("p");
line7.textContent = `Round Winner: ${roundWinner}`;
roundStats.append(line5);
roundStats.append(line6);
roundStats.append(line7);

const butt1 = document.createElement("button");
butt1.id = "butt1";
butt1.textContent = "Rock";

const butt2 = document.createElement("button");
butt2.id = "butt2";
butt2.textContent = "Paper";

const butt3 = document.createElement("button");
butt3.id = "butt3";
butt3.textContent = "Scissor";

buttonBox.append(butt1);
buttonBox.append(butt2);
buttonBox.append(butt3); 

body.append(line1);   
body.append(line2);
body.append(line3); 
body.append(line4);
body.append(roundStats);
body.append(buttonBox);
const buttonList = document.querySelectorAll("button"); 
for (let i=0;i<buttonList.length;i++){
    buttonList[i].style.padding="10px";
    buttonList[i].style.margin="5px";
}

body.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id) {
        case "butt1":
            humanChoice = "Rock";
            playRound(humanChoice);
            break;
        case "butt2":
            humanChoice = "Paper";
            playRound(humanChoice);
            break;
        case "butt3":
            humanChoice = "Scissor";
            playRound(humanChoice);
            break;
    }
});






