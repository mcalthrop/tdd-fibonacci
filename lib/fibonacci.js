/**
 * @description Calculate any number in the Fibonacci sequence.
 * @param {Number} index The index of the sequence to calculate; zero-based.
 * @returns {Number} the specified element of the Fibonacci sequence.
 */
function fibonacci(index) {
    if (index === 0 || index === 1) {
        return 1;
    } else if (index < 0 || !Number.isInteger(index)) {
        return 0;
    }

    return fibonacci(index - 1) + fibonacci(index - 2);
}

module.exports = fibonacci;
