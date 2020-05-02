let player_score = 0;
let computer_score = 0;

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
    ++player_score;
    ++computer_score;
    return alert("You Tied!");
}
else if ((player == "rock")&&(computer == "scissors")){
    ++player_score;
    return alert("You win! Rock beats Scissors!");
}
else if ((player == "paper")&&(computer == "rock")){ 
    ++player_score;
    return alert("You win! Paper beats Rock!");
}
else if ((player == "scissors")&&(computer == "paper")){
    ++player_score;
    return alert("You win! Scissors beats Paper!");
}
else if ((player == "rock")&&(computer == "paper")){
    ++computer_score;
    return alert("You lose! Paper beats Rock!")
}else if ((player == "paper")&&(computer == "scissors")){
    ++computer_score
    return alert("You lose! Scissors beats Paper!");
}else if ((player == "scissors")&&(computer == "rock")){
    ++computer_score;
    return alert("You lose! Rock beats Scissors!");
}
}

function scoreCompare(){
    if (player_score > computer_score){
        return "You win the game! " + player_score + " - " + computer_score;
    }
    else if (player_score < computer_score){
        return "You lose the game."  + player_score + " - " + computer_score;;
    }
    else{
        return "Tie game."  + player_score + " - " + computer_score;
    }
}

const clickPlayRound = document.querySelectorAll(".playerButton");
clickPlayRound.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        playRound(button.id, computerPlay());
        alert(player_score + "-" + computer_score);
    });
});