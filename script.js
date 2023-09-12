import DECK from './deck.js'

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")                                          
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

function cleanBeforeRound(){
  computerCardSlot.innerHTML = ""
  playerCardSlot.innerHTML = ""
  text.innerText = ""
  updateDeckCount()
}
function updateDeckCount(){
  computerDeckElement.innerText = computerDeck.numberOfCards
  playerDeckElement.innerText = playerDeck.numberOfCards
}



