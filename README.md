# memory-game
## Memory Game for FEND Project 2
This is the classic game of memory. Users are required to find all the pairs in the game.  

## How to Play the Game
The goal of the game is to find all the matching cards. There is a total of 16 cards and 8 pairs.

To begin playing:
* Click one card to reveal it's symbol/icon.
* Click another card to reveal it's symbol/icon.
* Find all the pairs
* When all 8 pairs have been found, you have won!
 
## Game Logic
The timer will begin once a user begins clicking on the cards. The moves will be counted for each two cards clicked. There is a scoring system based on the total number of moves. 

Scoring System:
* 1 - 11 Moves = 4 stars
* 12 - 17 Moves = 3 stars
* 18 - 24 Moves = 2 stars
* 25 or more Moves = 1 star

Once the user has found all 8 pairs. A pop-up window modal will display, showing the user the total time spent, total number of moves and final star score. Users will be asked if they want to play again. If yes is clicked, the pop-up will close and show the game screen reset. If no is clicked, the pop-up will close and users will see the game screen with all their moves complete. 

Users are allowed to reset the game at any time, using the reset button. 

## Languages Used 
The languages used for this project are:
* HTML
* CSS
* JavaScript