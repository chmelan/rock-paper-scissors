let playerScore = 0;
let computerScore = 0;

function computerPlay(){
switch(Math.floor(Math.random()*3)){
    case 0:
        return "rock";
        break;
    case 1: 
        return "paper";
        break;
    case 2: 
        return "scissors";
        break;
}
}

function playRound( playerSelection, computerSelection){


    let player = playerSelection;
    let computer = computerSelection;
if (player == computer){
    ++playerScore;
    ++computerScore;
    return alert("You Tied!");
}
else if ((player == "rock")&&(computer == "scissors")){
    ++playerScore;
    return alert("You win! Rock beats Scissors!");
}
else if ((player == "paper")&&(computer == "rock")){ 
    ++playerScore;
    return alert("You win! Paper beats Rock!");
}
else if ((player == "scissors")&&(computer == "paper")){
    ++playerScore;
    return alert("You win! Scissors beats Paper!");
}
else if ((player == "rock")&&(computer == "paper")){
    ++computerScore;
    return alert("You lose! Paper beats Rock!")
}else if ((player == "paper")&&(computer == "scissors")){
    ++computerScore
    return alert("You lose! Scissors beats Paper!");
}else if ((player == "scissors")&&(computer == "rock")){
    ++computerScore;
    return alert("You lose! Rock beats Scissors!");
}
}

function scoreCompare(){
    if (playerScore > computerScore){
        return "You win the game! " + playerScore + " - " + computerScore;
    }
    else if (playerScore < computerScore){
        return "You lose the game."  + playerScore + " - " + computerScore;;
    }
    else{
        return "Tie game."  + playerScore + " - " + computerScore;
    }
}
function updatePlayerScore(){
const updatePlayerScore = document.querySelector("#playerScore");
updatePlayerScore.textContent = playerScore;
}
function updateComputerScore(){
    const updateComputerScore = document.querySelector("#computerScore");
    updateComputerScore.textContent = computerScore;
    }

const clickPlayRound = document.querySelectorAll(".playerButton");
clickPlayRound.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        playRound(button.id, computerPlay());
        updatePlayerScore();
        updateComputerScore();
    });
});