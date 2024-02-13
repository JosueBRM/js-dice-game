'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice     = document.querySelector('.dice');
const btnNew   = document.querySelector('.btn--new');
const btnRoll  = document.querySelector('.btn--roll');
const btnHold  = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', () => {
    //Generate random number
    const diceNum = Math.floor(Math.random() * (7 - 1) + 1)
    
    //2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    //Check for rolled 1: if true, switch to next player
    if(diceNum !== 1){
        //Add the current dice in the current score
        currentScore += diceNum;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        switchPlayer();
    }
});

btnHold.addEventListener('click', () => {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }

    switchPlayer();
});


