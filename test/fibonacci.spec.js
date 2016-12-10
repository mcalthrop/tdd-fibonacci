/* global define, describe, it */

define(function(require) {
  var expect = require('node_modules/chai/chai').expect;
  var fibonacci = require('src/fibonacci');

  describe('Testing fibonacci', function() {
    it('should be a function', function() {
      expect(fibonacci).to.be.a('function');
    });
    // TODO: progressively un-skip remaining unit tests, writing
    // implementing the code to make each one work.
    it.skip('should return 1 for the first number', function() {
      expect(fibonacci(0)).to.equal(1);
    });
    it.skip('should return 1 for the second number', function() {
      expect(fibonacci(1)).to.equal(1);
    });
    it.skip('should return 13 for index 6', function() {
      expect(fibonacci(6)).to.equal(13);
    });
    it.skip('should return 0 for negative index', function() {
      expect(fibonacci(-1)).to.equal(0);
    });
  });
});
