////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove=="rock"){
      switch (computerMove){
        case "rock":
        winner="tie";
        break;

        case "paper":
        winner="computer";
        break;

        case "scissors":
        winner="player";
        break;

        default:
        computerMove="rock";
        break;
      }
    }
    if (playerMove=="paper"){
      switch (computerMove){
        case "rock":
        winner="player";
        break;

        case "paper":
        winner="tie";
        break;

        case "scissors":
        winner="computer";
        break;

        default:
        computerMove="rock";
        break;
      }
    }
    if (playerMove=="scissors"){
      switch (computerMove){
        case "rock":
        winner="computer";
        break;

        case "paper":
        winner="player";
        break;

        case "scissors":
        winner="tie";
        break;

        default:
        computerMove="rock";
        break;
         }
    }
    console.log("this round Winner is: "+winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins<5 && computerWins<5){
      var playerInput=getPlayerMove();
      console.log("player input is: "+playerInput);
      var computerInput=getComputerMove();
      console.log("computer input is: "+computerInput);

      var winnerWinner=getWinner(playerInput, computerInput);

      if(winnerWinner=="player"){
        playerWins=playerWins+1;
        console.log("player Win count is: "+playerWins);

      }
      if (winnerWinner=="computer"){
        computerWins=computerWins+1;
        console.log("computer Win count is: "+computerWins);

      }
      else{
        computerWins=computerWins;
        playerWins=playerWins;

      }

    }
    return [playerWins, computerWins];
}

console.log(playToFive());
