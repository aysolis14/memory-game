/*
 * Create a list that holds all of your cards
 */
let deck = document.querySelector('.deck');
let cards = document.querySelectorAll('.card');
let cardsList = [...cards];
let cardsShow = [];
let cardsMatched = [];
let moves = 0;

let moveCounter = document.querySelector('.moves');
let starCount = document.querySelectorAll('.fa-star');
let stars = [...starCount];


function startGame () {
    cardsShuffle();
} 
document.onload = startGame();
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 //from Mike Wales get unstuck FEND P3 webinar https://www.youtube.com/_ruH-sEs68y
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
        }
    })
})

function noMatch () {
        setTimeout(function() {
        cardsShow.forEach(function(card) {
            card.classList.remove('open', 'show');
        })
        cardsShow = [];
    }, 900);
}

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

function moveCount () {
    moves++;
    moveCounter.innerHTML = moves;
}

function starScore () {
    if (moves > 10) {
        stars[3].setAttribute('style', 'visibility: hidden');
    } 
    if (moves > 18) {
        stars[2].setAttribute('style', 'visibility: hidden');
    }
    if (moves >= 25) {
        stars[1].setAttribute('style', 'visibility: hidden');
    }
}