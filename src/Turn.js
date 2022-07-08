class Turn {
    constructor(guess, currentCard) {
        this.guess = guess;
        this.currentCard = currentCard;
    }

    returnGuess() {
        return this.guess;
    }

    returnCard() {
        return this.currentCard;
    }

    evaluateGuess() {
        // console.log(this.currentCard.correctAnswer)
        if (this.guess === this.currentCard.correctAnswer) {
            return true;
        } else {
            return false
        }
    }

    giveFeedback() {
        if (this.evaluateGuess() === true) {
            return `correct!`
        } else if (this.evaluateGuess() === false) {
            return `incorrect!`
        }
    }
};

module.exports = Turn;