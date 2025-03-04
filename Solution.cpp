
#include <vector>
using namespace std;

class Solution {

public:
    vector<int> transformArray(vector<int>& input) const {
        int indexSorted = 0;

        for (int i = 0; i < input.size(); ++i) {
                if (isEven(input[i])) {
                    input[i] = 1;
                    input[indexSorted] = 0;
                    ++indexSorted;
                }
                else {
                    input[i] = 1;
                }
        }
        return input;
    }

private:
    bool isEven(int value) const {
        return (value % 2) == 0;
    }
};
