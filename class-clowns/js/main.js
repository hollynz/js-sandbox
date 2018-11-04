// Code constructed from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

// LIVE HTMLCollection holding all image cards
let cards = document.getElementsByClassName('card');
let cardArr = [...cards];

// Element object of all image cards
const cardsEl = document.getElementById('cards');

// Scoring variables
var moves = 0, seconds = 0, minutes = 0, hours = 0,
    timer = document.querySelector(".timer"), interval,
    counterEl = document.querySelector('.moves');

var flippedCards = [];

// Matched cards
let matchedCards = document.getElementsByClassName('matched');

var clickedCards = [];

// Create array from nodelist HTML element
// function arrayFromNodeList(nodeList) {
//   var arr = [];
//   for(var i = 0; i < nodeList.length; i++) {
//     arr.push(nodeList[i]);
//   }
//   return arr;
// };

// Randomises card order
function randomise(arr) {
  var currIndex = arr.length, temp, randomIndex;
  while(currIndex !== 0){
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    temp = arr[currIndex];
    arr[currIndex] = arr[randomIndex];
    arr[currIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};

// Toggles classes to show/hide card faces
// Does this need to be a variable rather than straight function???
function showCard() {
  this.classList.toggle('flipped');
  this.classList.toggle('disabled');
};

// Add flipped cards to array of checked cards and check whether two cards match.
function checkCard() {
  flippedCards.push(this);
  var len = flippedCards.length;
  if(len === 2) {
    countMoves();
    if(flippedCards[0].type === flippedCards[1].type) {
      matched();
    }else {
      unmatched();
    }
  }
};

function matched() {
  flippedCards[0].classList.add('matched');
  flippedCards[0].classList.remove('flipped');
  flippedCards[1].classList.add('matched');
  flippedCards[1].classList.remove('flipped');
  flippedCards = [];
};

function unmatched() {
  flippedCards[0].classList.add('unmatched');
  flippedCards[1].classList.add('unmatched');
  disableCards();
  setTimeout(function() {
    flippedCards[0].classList.remove('matched, flipped');
    flippedCards[1].classList.remove('matched, flipped');
    enableCards();
    flippedCards = [];
  }, 1000);
};

// Enable cards again or disable cards that are a match
function enableCards() {
  [].filter.call(cardArr, (cards) => {
    cards.classList.remove('disabled');
    for(var i = 0; i < matchedCards.length; i++) {
      matchedCards[i].classList.add('disabled');
    };
  });
};

// Temporarily disable cards
function disableCards() {
  [].filter.call(cardArr, (cards) => {
    cards.classList.add('disabled');
  });
};

// Count number of attempts by user
function countMoves() {
  moves++;
  counterEl.innerHTML = moves + 'moves';
  // Start timer when player makes first move
  if(moves == 1) {
    startTimer();
  }
};

// Starts timer when game starts
function startTimer() {
  interval = setInterval(() => {
    timer.innerHTML = minutes + ': ' + seconds;
    seconds++;
    if(seconds == 60) {
      minutes++;
      seconds = 0;
    };
    if(minutes = 60) {
      hours++;
      minutes = 0;
    };
  }, 1000);
};

// Runs game
function start() {
  cardArr = randomise(cardArr);
  // For each random card in array...
  for(var i = 0; i < cardArr.length; i++) {
    cardsEl.innerHTML = '';
    [].forEach.call(cardArr, (item) => {
      cardsEl.appendChild(item);
    });
    cardArr[i].classList.remove('flipped', 'matched', 'unmatched', 'disabled');
  };
  moves = 0;
  counterEl.innerHTML = moves + ' moves';
  seconds = 0; minutes = 0; hours = 0;
  var timer = document.querySelector('.timer');
  timer.innerHTML = '00 : 00';
  clearInterval(interval);
};

for (var i = 0; i < cardArr.length; i++) {
  cards = cardArr[i];
  cards.addEventListener('click', showCard);
  cards.addEventListener('click', checkCard);
};

document.body.onload = start();


