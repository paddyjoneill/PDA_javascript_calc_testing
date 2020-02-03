var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function() {
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  it('it can subtract', function() {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can multiply', function() {
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it can divide', function() {
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can concatenate multiple number clicks', function() {
    calculator.numberClick(2)
    calculator.numberClick(7)
    assert.equal( calculator.runningTotal  , 27 )
  })

  it('it can chain multiple operations', function() {
    calculator.previousTotal = 3
    calculator.multiply(8)
    calculator.divide(6)
    assert.equal( calculator.runningTotal  , 4 )
  })

});
