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
