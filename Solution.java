
public class Solution {

    public int[] transformArray(int[] input) {
        int indexSorted = 0;

        for (int i = 0; i < input.length; ++i) {
            if (isEven(input[i])) {
                input[i] = 1;
                input[indexSorted] = 0;
                ++indexSorted;
            } else {
                input[i] = 1;
            }
        }
        return input;
    }

    private boolean isEven(int value) {
        return (value % 2) == 0;
    }
}
