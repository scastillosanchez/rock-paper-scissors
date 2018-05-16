/*jshint esversion:6*/ 

let playerPoints = 0;
let computerPoints = 0;
console.log("To start game, please type 'game()' into the console.");


function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let rand = choices[Math.floor(Math.random() * choices.length)];
    return rand;
}
function playRound(playerSelection, computerSelection) {
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return "It is a tie! Try again!";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "scissors"){
            playerPoints++;
            return "You win! Rock beats Scissors!";
        } else{
            computerPoints++;
            return "You lose! Paper beats Rock!";
        }
    } else if(playerSelection === "scissors"){
        if(computerSelection === "paper"){
            playerPoints++;
            return "You win! Scissors beats Paper!";
        } else {
            computerPoints++;
            return "You lose! Rock beats Scissors";
        }
    } else if(playerSelection === "paper"){
        if(computerSelection == "rock"){
            playerPoints++;
            return "You win! Paper beats Rock!";
        } else {
            computerPoints++;
            return "You lose! Scissors beats Paper!";
        }
    }
    else {
        computerPoints++;
        return "Wrong input, Computer wins it";
    }
    
}

function game() {
    let round = 1;
    while(round <= 5){
        let playerSelection = prompt("Choose Rock, Paper or Scissors: ");
        playerSelection = playerSelection.toLowerCase();
        console.log("Your choice is: " + playerSelection);
        console.log("Let's play! Computer will now choose an option.");
        console.log(playRound(playerSelection, computerPlay()));
        round++;   
        if(round > 5){
            checkFinalScore();
        }
    } 
}

function checkFinalScore(){
    console.log("Let's see the final score!");
    if(playerPoints > computerPoints){
        console.log( "You won " + playerPoints + " times! You win the game :)");
    } else if(computerPoints > playerPoints) {
        console.log("The computer won "+computerPoints+ " times! You lose the game :(");
    } else{
        console.log("It is a tie! No one wins, play again!");
    } 
}
