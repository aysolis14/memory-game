/*
 * Create a list that holds all of your cards
 */
const cardListArray = ['fa-basketball-ball', 'fa-basketball-ball', 
                      'fa-bowling-ball', 'fa-bowling-ball', 
                      'fa-baseball-ball', 'fa-baseball-ball', 
                      'fa-football-ball', 'fa-football-ball', 
                      'fa-futbol', 'fa-futbol',
                      'fa-quidditch', 'fa-quidditch',
                      'fa-volleyball-ball', 'fa-volleyball-ball', 
                      'fa-table-tennis', 'fa-table-tennis'];

let cards = document.querySelectorAll('.card');
let showCards = [];

cards.forEach(function(card) {
    card.addEventListener('click', function(f) {
        showCards.push(card);
        card.classList.add('open', 'show');

        if (showCards.length == 2) {
            cardMatch();
        }
        else {
            noMatch();
        }
    })
})

function noMatch () {
    setTimeout(function() {
        showCards.forEach(function(card) {
            card.classList.remove('open', 'show');
        })
        showCards = [];
    }, 900);
}

function cardMatch () {
    if (showCards[0].querySelector('i').classList.value == showCards[1].querySelector('i').classList.value) {
        showCards[0].classList.add('match');
        showCards[1].classList.add('match');
        showCards[0].classList.remove('show', 'open');
        showCards[1].classList.remove('show', 'open');
    }
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
