import DECK from './deck.js'

const computerCardSlot = document.querySelector('.computer-card-slot')
let playerDeck, computerDeck
function startGame(){
const deck = new Deck()
deck.shuffle()

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck =  new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck   new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  
console.log(playerDeck)
console.log(computerDeck)
}


