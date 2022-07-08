const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function () {
    let card1
    let card2;
    let card3;
    let turn;
    let deck;
    let round;
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
        deck = new Deck([card1, card2, card3]);
        turn = new Turn('object', card1)
        round = new Round(deck);
    })

    it('should be a function', function () {
        expect(Round).to.be.a('function');
    });

    it(`should be an instance of Round`, function () {
        expect(round).to.be.an.instanceof(Round);
    }); 

// Your Round class will be the object that takes in responses 
// and records these guesses(as well as if they are correct or incorrect). 
// The currentCard should be the first Card in the Deck(the array of Cards) 
// at the start of the Round

    it('should start with a new deck of cards starting with the current card', function () {
        let currentCard = round.CurrentCard;

        expect(deck).to.be.an.instanceOf(Deck);
        expect(currentCard).to.equal(deck.card1)
    }); 

    it('should start with no turns', function () {
        expect(round.turns).to.equal(0);
    });

    it(`should start with an empty array to store the ids of incorrect guesses`, function () {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
    
    it(`should evaluate whether the player's guess is true`, function () {
        // expect(turn).to.be.an.instanceOf(Turn);
        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn.giveFeedback()).to.equal(`correct!`)
    });

    it(`should evaluate whether the player's guess is false`, function () {
        let turn2 = new Turn('array', card1)
        expect(turn2).to.be.an.instanceOf(Turn);
        expect(turn2.evaluateGuess()).to.equal(false)
        expect(turn2.giveFeedback()).to.equal(`incorrect!`)
        // console.log(turn2)
    });
    
    it('should count each turn', function () {
        expect(round.turns).to.equal(0);
        round.takeTurn();
        expect(round.turns).to.equal(1);
    });

    it('should store the ids of incorrect guesses', function () {
        round.takeTurn();
        expect(round.deck).to.have.lengthOf(2)
    });

});
    
    //methods:
    // takeTurn()
    // calculatePercentCorrect()
    // endRound()
/*
Your Round class should meet the following requirements:
-takeTurn: method that updates Turns count, evaluates guesses, gives 
feedback, and stores ids of incorrect guesses
-When a guess is made, a new Turn instance is created.
-The turns count is updated, regardless of whether the guess is 
correct or incorrect
-The next card becomes current card
-Guess is evaluated/recorded. Incorrect guesses will be stored 
(via the id) in an array of incorrectGuesses
-Feedback is returned regarding whether the guess is incorrect 
or correct
-calculatePercentCorrect: method that calculates and returns the 
percentage of correct guesses
-endRound: method that prints the following to the console: 
‘** Round over! ** You answered <>% of the questions correctly!’
-returnCurrentCard: method that returns the current card being played
*/
