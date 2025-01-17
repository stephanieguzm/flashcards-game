const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');

describe('Card', function () {
  let card1;
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  }); 

  it.skip('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it.skip('should be an instance of Card', function() {
    expect(card1).to.be.an.instanceof(Card);
  }); 

  it.skip('should have an id', function () {
    expect(card1.id).to.equal(1);
  });  

  it.skip('should store a question', function() {
    expect(card1.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it.skip('should store a list of possible answers', function() {
    expect(card1.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it.skip('should store the correct answer', function() {
    expect(card1.correctAnswer).to.equal('object');
  });
});
