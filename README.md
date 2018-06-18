# Memory Game Project

This is a very simple game to test your luck ad sometimes your memory.
## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [How to play](#howToPlay)
## Instructions

Load the open the index.html file with a browser, and it will load you a grid with 16 cards total. So the game is generating the deck each time the page is loaded, the game has restarted or you pressed "play again" button. There is an event listener on the cards so when the card is clicked it will get "show" "open" and "blocked" classes added to him and pushed in an array. If the array has less than 2 cards in it it will let u to open more cards, but if there will be 2 cards in that array then it will compare the 2 cards in the array if the 2 cards match they will get the class added "match" and will be pushed in an array called "matchCards" the "show" and "open" will be removed, "blocked" stay because its prevent that cards are clicked again. The game modal  will be triggered if you will have all 8 pair of cards in the "matchCards" array. The time will set of when yo will make your first click on the cards and the move counter is counting every single click.      

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## How to play

So by clicking on the cards reveals it , when you will open two cards the game will compare them and if they match they will light up in green and will stay open, if they not match they will flash in red and will be flipped over again and you can continue your game. Your goal is to collect all 8 pairs of cards in the less possible moves and in the least time.
Good luck have fun!!
