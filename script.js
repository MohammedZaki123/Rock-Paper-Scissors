let computer_points = 0;
let player_points = 0;
let com_won = false;
let player_won = false;
const choices = ["rock", "paper", "scissors"];
function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * choices.length);
    console.log('Computer chooses ' + choices[randomIndex]);
    return choices[randomIndex];
}

function playerSelection(){
    let input;
    do{
        input = prompt("Your Turn:");
    }
    while(input==null || !(choices.includes(input.toLowerCase())));
    console.log('player chooses ' + input.toLowerCase());
    return input.toLowerCase();
}
function playRound(playerSelection, computerSelection){
    if(playerSelection==computerSelection){
        console.log('It is a tie' );
        return 'It is a tie';
    }
    else if(playerSelection=='rock' && computerSelection=='scissors' || playerSelection=='paper' &&
    computerSelection=='rock' || playerSelection=='scissors' && computerSelection=='paper'){
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }else{ 
        console.log('You Lose! ' + computerSelection + " beats " + playerSelection);
        return 'You Lose! ' + computerSelection + " beats " + playerSelection;
    }
}
function playGame(){
    let round_no = 1
    let round_play = '';
    let a_tie = false;
    while (round_no <= 5){
        if(!a_tie){
        console.log("round number: " + round_no);
        }
        let player = playerSelection(); 
        let computer = getComputerChoice();
        round_play = playRound(player, computer);
        if(round_play.includes('Lose')){
            computer_points++;
        }else if(round_play.includes('Win')){
            player_points++;

        }else{
            a_tie = true;
            continue;
        }
        console.log('Current Score: '+ computer_points + "(for Computer) - "+ player_points + " for Player");
        round_no++;
        a_tie = false;
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
