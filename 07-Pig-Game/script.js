"use strict";

// Selecting elements
const player0EI = document.querySelector(".player--0");
const player1EI = document.querySelector(".player--1");
const score0EI = document.querySelector("#score--0");
const score1EI = document.getElementById("score--1");
const current0EI = document.getElementById("current--0");
const current1EI = document.getElementById("current--1");

const diceEI = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EI.textContent = 0;
  score1EI.textContent = 0;
  current0EI.textContent = 0;
  current1EI.textContent = 0;

  diceEI.classList.add("hidden");
  player0EI.classList.remove("player--winner");
  player1EI.classList.remove("player--winner");
  player0EI.classList.add("player--active");
  player1EI.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EI.classList.toggle("player--active");
  player1EI.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEI.classList.remove("hidden");
    diceEI.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // score[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2.Check if player's score is > 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEI.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
