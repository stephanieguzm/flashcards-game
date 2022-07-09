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
    let turn2;
    let deck;
    let round;
    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
        card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')
        deck = new Deck([card1, card2, card3]);
        turn = new Turn('object', card1)
        turn2 = new Turn('array', card1)
        round = new Round(deck);
    })

    it.skip('should be a function', function () {
        expect(Round).to.be.a('function');
    });

    it.skip(`should be an instance of Round`, function () {
        expect(round).to.be.an.instanceof(Round);
    }); 

    it.skip('should start with a new deck of cards starting with the current card', function () {
        let currentCard = round.CurrentCard;

        expect(deck).to.be.an.instanceOf(Deck);
        expect(currentCard).to.equal(deck.card1)
    }); 

    it.skip('should start with no turns', function () {
        expect(round.turns).to.equal(0);
    });

    it.skip(`should start with an empty array to store the ids of incorrect guesses`, function () {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });


    
    it.skip(`should evaluate whether the player's guess is true`, function () {
        // expect(turn).to.be.an.instanceOf(Turn);
        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn.giveFeedback()).to.equal(`correct!`)
    });

    it.skip(`should evaluate whether the player's guess is false`, function () {
        expect(turn2).to.be.an.instanceOf(Turn);
        expect(turn2.evaluateGuess()).to.equal(false)
        expect(turn2.giveFeedback()).to.equal(`incorrect!`)
        // console.log(turn2)
    });
    
    it.skip('should count each turn', function () {
        expect(round.turns).to.equal(0);
        round.takeTurn();
        expect(round.turns).to.equal(1);
    });

    it.skip('should store the ids of incorrect guesses', function () {
        round.takeTurn();
        expect(turn2).to.be.an.instanceOf(Turn);
        expect(turn2.evaluateGuess()).to.equal(false)
        expect(round.incorrectGuesses).to.deep.equal([1])
        expect(round.deck).to.have.lengthOf(2)
    });

    it.skip('should return the percentage of correct guesses', function () {
        const percentCorrect = round.calculatePercentCorrect();

        round.takeTurn();
        expect(round.turns).to.equal(1)
        expect(turn2.evaluateGuess()).to.equal(false)
        expect(round.incorrectGuesses).to.deep.equal([1])
        expect(percentCorrect).to.equal('33.34%')

    });
});
    