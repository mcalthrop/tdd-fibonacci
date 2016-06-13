/* global define, describe, it */

define(function (require) {
    var expect = require('node_modules/chai/chai').expect;
    var fibonacci = require('src/fibonacci');

    describe('Testing fibonacci', function () {
        it('should be a function', function () {
            expect(fibonacci).to.be.a('function');
        });
        // TODO: implement remaining unit tests
        it('should return 1 for the first number');
        it('should return 1 for the second number');
        it('should return 13 for index 6');
        it('should return 0 for negative index');
    });
});
