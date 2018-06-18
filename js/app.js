/*
 * it holding all my cards
 */
 let cardArray = [
  {'name' : 'diamond',
   'cardClass' : 'fa fa-diamond'},
  {'name' : 'anchor',
   'cardClass' : 'fa fa-anchor'},
  {'name' : 'bolt',
   'cardClass' : 'fa fa-bolt'},
  {'name' : 'cube',
   'cardClass' : 'fa fa-cube'},
  {'name' : 'leaf',
   'cardClass' : 'fa fa-leaf'},
  {'name' : 'bicycle',
   'cardClass' : 'fa fa-bicycle'},
  {'name' : 'bomb',
   'cardClass' : 'fa fa-bomb'},
  {'name' : 'plane',
   'cardClass' : 'fa fa-paper-plane-o'},
   {'name' : 'diamond',
    'cardClass' : 'fa fa-diamond'},
   {'name' : 'anchor',
    'cardClass' : 'fa fa-anchor'},
   {'name' : 'bolt',
    'cardClass' : 'fa fa-bolt'},
   {'name' : 'cube',
    'cardClass' : 'fa fa-cube'},
   {'name' : 'leaf',
    'cardClass' : 'fa fa-leaf'},
   {'name' : 'bicycle',
    'cardClass' : 'fa fa-bicycle'},
   {'name' : 'bomb',
    'cardClass' : 'fa fa-bomb'},
   {'name' : 'plane',
    'cardClass' : 'fa fa-paper-plane-o'}
 ];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
 }
//Declaring variables
const deck = document.getElementById('deck');
let counter = document.querySelector(".moves");
let matchCards = document.getElementsByClassName('match');
const modal = document.getElementById('myModal');
let stars = document.querySelectorAll(".stars li");
let span = document.getElementsByClassName("close")[0];
let timer = document.querySelector(".timer");
let popup = document.querySelector(".winText");
let count = [];
//Variables for time moves and rating
let moves = 0;
let hours = 0;
let minutes = 0;
let seconds =0;
let rating = 3;
let interval;

//This is creating the whole deck
function creatDeck(){
   cardArray.forEach(item => {
   const list = document.createElement('li');
   list.setAttribute('class', 'card');
   deck.appendChild(list);
   list.addEventListener('click', function(event){
	   let flip = event.target;
     moveCounter();
     count.push(flip);
     let openCards = count.length;
     //we need this to not flip more cards then 2 at the time
     if (openCards <2){
	   flip.classList.add('show', 'open', 'blocked');
   }
     if (openCards === 2){
	   openedCards();
     finGame();
   }

   });
   const card = document.createElement('i');
   card.setAttribute('class', item.cardClass)
   list.appendChild(card);
});
}

//This function is handling th e match or un match cards
function openedCards(){
        if(count[0].innerHTML === count[1].innerHTML){
          count[0].classList.add("match", "blocked");
          count[0].classList.remove("show", "open");
          count[1].classList.add("match", "blocked");
          count[1].classList.remove("show", "open");
          count = [];
         }else {
           count[0].classList.add("unmatched");
           count[1].classList.add("unmatched");
            setTimeout(function(){
        		count[0].classList.remove('show', 'open', "unmatched", "blocked");
            count[1].classList.remove('show', 'open', "unmatched", "blocked");
        		count = [];
          },350);
         }
       }

//With this we are starting the game and shuffuling the cards
function startGame() {
    cardArray = shuffle(cardArray);
    restartDeck();
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds =0;
    timer.innerHTML = minutes +"mins " + seconds + "secs";
    count = [];
    moves = 0;
    counter.innerHTML = moves;
    rating = 3;
    for (var i= 0; i < stars.length; i++){
      stars[i].style.visibility = "visible";
    }
  }

document.body.onload = startGame();       
