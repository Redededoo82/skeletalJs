/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var globalScore = 0;
var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;
// var dice = Math.floor(Math.random()*6) +1;
// console.log(dice);
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + "</em>"

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
    //get random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //display result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //update the round score if the rolled number was not a 1
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        // document.querySelector('.dice').style.display = 'none';

    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // var dice = Math.floor(Math.random()*6)+1;
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // globalScore += dice;


    //     document.getElementById('current-0').textContent = '0';
    //     document.getElementById('current-1').textContent = '0';
    //     document.querySelector('.player-0-panel').classList.toggle('active');
    //     document.querySelector('.player-1-panel').classList.toggle('active');

    //add current score to global score//
    //update UI//

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

    //check if player won the game//
});
