'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score0 = 0;
let score1 = 0;
let current = 0;
let current1 = 0;
let scores = [0, 0];

score0El.textContent = 0;
score1El.textContent = 0;

let activeplayer = 0;
let play = true;

const switchPlayer = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  current = 0;
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;
};

btnRoll.addEventListener('click', function () {
  if (play) {
    const rand = Math.trunc(Math.random() * 6) + 1;

    dice.src = `img/dice-${rand}.png`;

    if (rand !== 1) {
      current += rand;
      document.getElementById(`current--${activeplayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (play) {
    scores[activeplayer] += current;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.toggle('player--winner');
      dice.classList.add('hidden');
      play = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  score0 = 0;
  score1 = 0;
  current = 0;
  current1 = 0;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;

  document.getElementById(`current--${activeplayer}`).textContent = current;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  dice.classList.remove('hidden');

  activeplayer = 0;
  play = true;
});

//info-btn

const infoBtn = document.querySelector('.info-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

infoBtn.addEventListener('click', function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

//close-btn

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', function (e) {
  e.preventDefault();

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
