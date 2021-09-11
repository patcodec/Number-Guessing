'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secretNumber;
var score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const changeBackground = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (guessNumber < 1 || guessNumber > 20) {
    displayMessage('Number should between 1 to 20');
  } else if (guessNumber === secretNumber) {
    displayMessage('Correct Number');
    displayNumber(secretNumber);
    changeBackground('#06b347', '30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber('?');
  displayMessage('Start guessing...');

  changeBackground('#222', '15rem');
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highscore;
});
