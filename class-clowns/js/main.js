// https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript
// Card array holding all image cards
var cardArr = document.querySelectorAll('.card');

// Card deck unordered list
var cardsEl = document.querySelector('#cards');

// Scoring variables
var timer = 0, moves = 0;
var counterEl = document.querySelector('.moves');

// Matched cards
var matchedCards = document.querySelectorAll('.match');

var clickedCards = [];



function randomise(){

}

function start(){

}

function showCard(){
  this.classList.toggle('visible');
  this.classList.toggle('matched');
}

for(var i = 0; i < cardArr.length; i++){
  card = cardArr[i].addEventListener('click', showCard);
}