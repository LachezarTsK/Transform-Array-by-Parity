
package main

func transformArray(input []int) []int {
    var indexSorted = 0

    for i := range input {
        if isEven(input[i]) {
            input[i] = 1
            input[indexSorted] = 0
            indexSorted++
        } else {
            input[i] = 1
        }
    }
    return input
}

func isEven(value int) bool {
    return (value % 2) == 0
}
