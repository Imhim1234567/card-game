import DECK from './deck.js'

const computerCardSlot = document.querySelector('.computer-card-slot')
const playerCardSlot = document.querySelector('.player-card-slot')
const computerDeck = document.querySelector('.computer-deck')
const computerDeck = document.querySelector('.computer-deck')
const playerDeck = document.querySelector('.player-deck)
const computerCardSlot = document.querySelector('.computer-card-slot')
const computerDeck = document.querySelector('.computer-deck')                                          
let playerDeck, computerDeck

// function to be able to play the game 
function startGame(){
const deck = new Deck()
deck.shuffle()
// splits the cards into 2 equal halfs
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck =  new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck   new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  
cleanBeforeRound()
}

function cleanBeforeRound()

