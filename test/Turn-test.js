const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {
    let card1;
    let turn;
    let turn2; 
    beforeEach( () => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
        turn = new Turn('object', card1)
        turn2 = new Turn('array', card1)           
    }) 

    it('should be a function', function () {
        expect(Turn).to.be.a('function');
    });

    it(`should be an instance of Turn with a player's guess and the current card`, function () {
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it(`should be able to return a player's guess`, function() {
        turn.returnGuess();
        expect(turn.guess).to.equal('object');
    });

    it('should be able to return the current card', function () {
        let returnedCard = turn.returnCard();

        expect(returnedCard).to.equal(card1);
    });

    it(`should return true or false depending on the player's response`, function() {

        turn.evaluateGuess();
        expect(turn.evaluateGuess()).to.equal(true);

        turn2.evaluateGuess();
        expect(turn2.evaluateGuess()).to.equal(false);
    });

    it(`should return a message based on player's response`, function() {
        let feedback = turn.giveFeedback();

        expect(feedback).to.equal(`correct!`);
    })
});