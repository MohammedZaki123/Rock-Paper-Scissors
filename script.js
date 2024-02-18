function getComputerChoice(){
    
}
function playRound(playerSelection, computerSelection){

}

function playerSelection(){

}
function playGame(){
    let computer_points = 0;
    let player_points = 0;
    let round_no = 1
    let round_winner = '';
    let com_won = false;
    let player_won = false;
    while (round_no <= 5){
        round_winner = playRound(playerSelection, getComputerChoice);
        if(round_winner.includes('Computer')){
            computer_points++;
        }else{
            player_points++;

        }
        checkTheWinner(player_points, computer_points,com_won, player_won);
        if (com_won){
            console.log('Game Over!!!!, Computer won');
            console.log('Final Score: '+ computer_points + " - "+ player_points);
            break;
        }else if(player_won){
            console.log('Game Over!!!!, Player won');
            console.log('Final Score: '+ player_points + " - "+ computer_points);
            break;
        }
        console.log('Current Score: '+ computer_points + " - "+ player_points);
    }
}

function checkTheWinner(){

}
