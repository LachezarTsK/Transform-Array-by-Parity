
using System;

public class Solution
{
    public int[] TransformArray(int[] input)
    {
        int indexSorted = 0;

        for (int i = 0; i < input.Length; ++i)
        {
            if (IsEven(input[i]))
            {
                input[i] = 1;
                input[indexSorted] = 0;
                ++indexSorted;
            }
            else
            {
                input[i] = 1;
            }
        }
        return input;
    }

    private bool IsEven(int value)
    {
        return (value % 2) == 0;
    }
}
