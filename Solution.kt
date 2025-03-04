
class Solution {
    
    fun transformArray(input: IntArray): IntArray {
        var indexSorted = 0

        for (i in input.indices) {
            if (isEven(input[i])) {
                input[i] = 1
                input[indexSorted] = 0
                ++indexSorted
            } else {
                input[i] = 1
            }
        }
        return input
    }

    private fun isEven(value: Int): Boolean {
        return (value % 2) == 0
    }
}
