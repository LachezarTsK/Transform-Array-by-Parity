
/**
 * @param {number[]} input
 * @return {number[]}
 */
var transformArray = function (input) {
    let indexSorted = 0;

    for (let i = 0; i < input.length; ++i) {
        if (isEven(input[i])) {
            input[i] = 1;
            input[indexSorted] = 0;
            ++indexSorted;
        } else {
            input[i] = 1;
        }
    }
    return input;
};

/**
 * @param {number} value
 * @return {boolean}
 */
function isEven(value) {
    return (value % 2) === 0;
}
