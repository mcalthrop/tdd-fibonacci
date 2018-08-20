const fibonacci = require('../lib/fibonacci');

describe('fibonacci()', () => {

    describe('when index is 0', () => {
        it('should return 1', () => {
            expect(fibonacci(0)).toEqual(1);
        });
    });
    describe('when index is 1', () => {
        it('should return 1', () => {
            expect(fibonacci(1)).toEqual(1);
        });
    });
    describe('when index is 6', () => {
        it('should return 13', () => {
            expect(fibonacci(6)).toEqual(13);
        });
    });
    describe('when index is negative', () => {
        it('should return 0', () => {
            expect(fibonacci(-1)).toEqual(0);
        });
    });
    describe('when index is undefined', () => {
        it('should return 0', () => {
            expect(fibonacci()).toEqual(0);
        });
    });
    describe('when index is a decimal', () => {
        it('should return 0', () => {
            expect(fibonacci(3.1)).toEqual(0);
        });
    });

});
