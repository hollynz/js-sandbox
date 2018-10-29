// Code constructed from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

// Array holding all image cards
var cardArr = [].slice.call(document.getElementsByClassName('card'));

// Unordered list element of all image cards
var cardsEl = document.getElementById('cards');

// Scoring variables
var timer = 0, seconds = 0, minutes = 0, hours = 0, moves = 0, 
    counterEl = document.querySelector('.moves');

// Matched cards
var matchedCards = document.getElementsByClassName('match');

var clickedCards = [];

// Randomises card order
function randomise (arr) {
  var currIndex = arr.length, temp, randomIndex;
  while(currIndex != 0){
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex--;
    temp = arr[currIndex];
    arr[currIndex] = arr[randomIndex];
    arr[currIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

function start () {
  var randomisedCards = randomise(cardArr);
  for(var i = 0; i < randomisedCards.length; i++) {
    [].forEach.call(randomisedCards, (item) => {
      cardsEl.appendChild(item);
    })
  }
}

window.onload = start();

function startTimer() {

}

// Toggles classes to show/hide card faces
var showCard = () => {
  this.classList.toggle('visible');
  this.classList.toggle('matched');
};

function matched() {

}

function unmatched() {

}

// Enable cards and disable cards already matched
function enableCards() {

}

// Temporarily disable cards
function disableCards() {

}

// Count number of attempts by user
function countMoves() {

}

for (var i = 0; i < cardArr.length; i++) {
  cardArr[i].addEventListener('click', showCard);
}
