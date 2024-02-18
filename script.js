let computer_points = 0;
let player_points = 0;
let com_won = false;
let player_won = false;
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playerSelection(){
    let input = prompt('Your TURN: ', );
    return input.toLocaleLowerCase();
}
function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        console.log('It is a tie');
    }
    else if(playerSelection=='rock' && computerSelection=='scissors' || playerSelection=='paper' &&
    computerSelection=='rock' || playerSelection=='scissors' && computerSelection=='paper'){
        console.log('Player won the round');
    }else{
        console.log('Computer won the round');
    }
}
function playGame(){
    let computer_points = 0;
    let player_points = 0;
    let round_no = 1
    let round_winner = '';
    while (round_no <= 5){
        round_winner = playRound(playerSelection, getComputerChoice);
        if(round_winner.includes('Computer')){
            computer_points++;
        }else{
            player_points++;

        }
        console.log('Current Score: '+ computer_points + " - "+ player_points);
    }
}

function checkTheWinner(){
    if (player_points>computer_points){
        player_won = true;
    }else{
        com_won = true;
    }
}
playGame();
checkTheWinner();
if (com_won){
    console.log('Game Over!!!!, Computer won');
    console.log('Final Score: '+ computer_points + " - "+ player_points);
}else if(player_won){
    console.log('Game Over!!!!, Player won');
    console.log('Final Score: '+ player_points + " - "+ computer_points);
}
