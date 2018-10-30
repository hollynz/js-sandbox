// Code constructed from https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript

// Array holding all image cards
// var cardArr = [].slice.call(document.getElementsByClassName('card'));
var cardArr = arrayFromNodeList(document.getElementsByClassName('card'));

// Unordered list element of all image cards
var cardsEl = document.querySelector('.cards');

// Scoring variables
var timer = 0, seconds = 0, minutes = 0, hours = 0, moves = 0, 
    counterEl = document.querySelector('.moves');

var flippedCards = [];

// Matched cards
var matchedCards = document.getElementsByClassName('match');

var clickedCards = [];

// Create array from nodelist HTML element
function arrayFromNodeList(nodeList) {
  var arr = [];
  for(var i = 0; i < nodeList.length; i++) {
    arr.push(nodeList[i]);
  }
  return arr;
}

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

// Runs game
function start () {
  // Randomised array of cards
  var randomisedCards = randomise(cardArr);
  // For each random card in array...
  randomisedCards.forEach(() => {
    [].forEach.call(randomisedCards, (item) => {
      cardsEl.appendChild(item);
    })
  });
}

// Add flipped cards to array of checked cards and check whether two cards match.
function checkCard() {
  flippedCards.push(this);
  if(flippedCards.length === 2) {
    countMoves();
    if(flippedCards[0].type === flippedCards[1].type) {
      matched();
    }else {
      unmatched();
    }
  }
}

function startTimer() {

}

// Toggles classes to show/hide card faces
var showCard = () => {
  this.classList.toggle('visible');
  this.classList.toggle('matched');
};

function matched() {
  flippedCards[0].classList.add('match');
  flippedCards[1].classList.add('match');
  flippedCards[0].classList.remove()
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

window.onload = start();

for (var i = 0; i < cardArr.length; i++) {
  cardArr[i].addEventListener('click', showCard);
}
