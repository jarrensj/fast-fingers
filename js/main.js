window.addEventListener('load', init);

const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const textBox = document.querySelector('#input-box');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'keyboard',
  'love',
  'lucky',
  'kobe',
  'tacos',
  'feelings',
  'tough',
  'coffee',
  'yellow',
  'healer',
  'love',
  'sweater',
  'hoodie',
  'roaster',
  'orange',
  'blanket',
  'brother',
  'mother',
  'father',
  'raw',
  'laughter',
  'joy',
  'life',
  'preserve',
  'basketball',
  'cheeseburger',
  'fries',
  'atomic',
  'website',
  'desktop',
  'Wednesday',
  'slack',
  'homies',
  'books',
  'nature',
  'nurture'
];

// initialize
function init() {
  // show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // load word from array
  showWord(words);
  // start matching on word input
  textBox.addEventListener('input', checkMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

function checkMatch() {
  if (isMatch()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    textBox.value = '';
    ++score;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function isMatch() {
  if (textBox.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct! (๑˃̵ᴗ˂̵)و';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// pick and show a random word from the array
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    --time;
  } else if (time === 0) {
    // game over
    isPlaying = false;
  }
  // display time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'game over 〈(゜。゜)';
    score = -1;
  }
}
