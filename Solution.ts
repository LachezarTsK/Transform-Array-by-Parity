
function transformArray(input: number[]): number[] {
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

function isEven(value: number): boolean {
    return (value % 2) === 0;
}
