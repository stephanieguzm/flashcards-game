const Turn = require('./Turn');

class Round {
    constructor(deck) {
        this.deck = deck.cards;
        this.turns = 0;
        this.incorrectGuesses = [];
        this.currentCard = this.deck[0]
        // console.log(this.currentCard)
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.CurrentCard)
        this.turns++
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.deck.shift()
    }
};

module.exports = Round;