/*jshint esversion:6*/ 
//Second version
window.onload = function () {
    let choices = document.querySelectorAll('button');
    let player = document.querySelector('#player');
    let computer = document.querySelector('#computer');
    let compare = document.querySelector('#compare');
    let yourScore = document.querySelector('#yourScore');
    let compScore = document.querySelector('#compScore');
    let rounds = document.querySelector('#rounds');
    let computerPoints = 0;
    let playerPoints = 0;
    let round = 1;
    
     choices.forEach((choice) => {
        choice.addEventListener('click', game);
    });

    function computerPlay() {
        let choices = ["rock", "paper", "scissors"];
        let rand = choices[Math.floor(Math.random() * choices.length)];
        return rand;
    }
    function playRound(playerSelection, computerSelection) {
        player.innerHTML = "<strong>Player Choice: </strong>" + playerSelection;
        computer.innerHTML = "<strong>Computer Choice: </strong>" + computerSelection;
        //computerSelection = computerSelection.toLowerCase();
        if(playerSelection === computerSelection){
            compare.innerHTML = "It is a tie! Try again!";
        }
        else if(playerSelection === "rock"){
            if(computerSelection === "scissors"){
                playerPoints++;
                compare.innerHTML = "You win! Rock beats Scissors!";
            } else{
                computerPoints++;
                compare.innerHTML = "You lose! Paper beats Rock!";
            }
        } else if(playerSelection === "scissors"){
            if(computerSelection === "paper"){
                playerPoints++;
                compare.innerHTML = "You win! Scissors beats Paper!";
            } else {
                computerPoints++;
                compare.innerHTML = "You lose! Rock beats Scissors";
            }
        } else if(playerSelection === "paper"){
            if(computerSelection == "rock"){
                playerPoints++;
                compare.innerHTML = "You win! Paper beats Rock!";
            } else {
                computerPoints++;
                compare.innerHTML = "You lose! Scissors beats Paper!";
            }
        }
        else {
            computerPoints++;
            compare.innerHTML = "Wrong input, Computer wins it";
        }
        yourScore.innerHTML = playerPoints;
        compScore.innerHTML = computerPoints;
    }

    function game() {
        let playerChoice = this.id;
        playRound(playerChoice, computerPlay());
        rounds.innerHTML = round;
        round++;
    }
 
};
