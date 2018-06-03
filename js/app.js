//deck and all variables
let deck = document.querySelector('.deck');
let cards = document.querySelectorAll('.card');
let cardsList = [...cards];
let cardsShow = [];
let cardsMatched = [];
let moves = 0;
let time = document.querySelector('.timer');
let seconds = 0;
let minutes = 0;
let interval;
let moveCounter = document.querySelector('.moves');
let starCount = document.querySelectorAll('.fa-star');
let stars = [...starCount];
let winGame = document.querySelector('.modal');
let popup = document.querySelector('.window');
let movesFinal = document.querySelector('.info-moves');
let timeFinal = document.querySelector('.info-time');
let scoreFinal = document.querySelector('.info-score');
let restart = document.querySelector('.fa-redo');
let finalStarScore;
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');

//function to start game
function startGame () {
    cardsShuffle();
} 
document.onload = startGame();

//shuffle card function to shuffle cards
 function cardsShuffle () {
     shuffle(cardsList);
     for (let i = 0; i < cardsList.length; i++) {
         let cardNew = cardsList[i];
         deck.appendChild(cardNew);
     }
 }

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

/* adding event listeners to each card. running the card match function
and no match function once two cards are clicked -- 
From Mike Wales get unstuck FEND P3 webinar https://youtu.be/_rUH-sEs68Y
*/
cards.forEach(function (card) {
    card.addEventListener('click', function (f) {
        if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
            cardsShow.push(card);
            card.classList.add('open', 'show');

            if (cardsShow.length == 2) {
                cardMatch();
                moveCount();
                starScore();
            }
            else {
                noMatch();
            }
            if (cardsMatched.length == 16) {
                winner();
            }
        }
    })
})
//function if the cards flipped do no match
function noMatch () {
        setTimeout(function() {
        cardsShow.forEach(function(card) {
            card.classList.remove('open', 'show');
        })
        cardsShow = [];
    }, 1300);
}
//function if the cards flipped match
function cardMatch () {
    if (cardsShow[0].querySelector('i').classList.value == cardsShow[1].querySelector('i').classList.value) {
        cardsShow[0].classList.add('match');
        cardsShow[1].classList.add('match');
        cardsShow[0].classList.remove('show', 'open');
        cardsShow[1].classList.remove('show', 'open');
        cardsMatched.push(cardsShow[0].innerHTML);
        cardsMatched.push(cardsShow[1].innerHTML);
    }
}
//function to count the moves and start timer once 1 move is counted
function moveCount () {
    moves++;
    moveCounter.innerHTML = moves;
    if (moves == 1) {
        timer();
    }
}
//function to score the user, with stars, based on number of moves counted
function starScore () {
    if (moves >= 12) {
        stars[3].setAttribute('style', 'visibility: hidden');
        finalStarScore = 3;
    } 
    if (moves >= 18) {
        stars[2].setAttribute('style', 'visibility: hidden');
        finalStarScore = 2;
    }
    if (moves >= 25) {
        stars[1].setAttribute('style', 'visibility: hidden');
        finalStarScore = 1;
    }
}
//function to run the timer and add it to html view on game
function timer() {
    interval = setInterval(function () {
        time.innerHTML = "Time: " + minutes + " min " + seconds + " seconds";
        seconds++;
        if (seconds == 60) {
            minutes++; 
            seconds = 0;
        }
    }, 1000);
}
//function to show modal to user once the game has been won - when all matches have been found
function winner () {
    clearInterval(interval);
    let timerFinal = time.innerHTML;
    winGame.setAttribute('style', 'display: block');
    movesFinal.innerHTML = "Moves: " + moves;
    timeFinal.innerHTML = "" + timerFinal;
    scoreFinal.innerHTML = "Score: " + finalStarScore + " stars.";
    yes.addEventListener('click', function (y) {
        closePopup();
        window.location = window.location;
    })
    no.addEventListener('click', function(n) {
        closePopup();
    })        
}
//function to restart game when the restart button is clicked
function restartGame () {
    restart.addEventListener('click', function(r) {
        window.location = window.location;
    })
} restartGame();
//function to close popup window when game is won
function closePopup () {
    winGame.setAttribute('style', 'display: none');
}