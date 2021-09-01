// 문제 및 풀이: https://velog.io/@e7838752/programmers42842
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int brown, int yellow) {
    vector<int> answer;
    for (int i = 1; i < 2502; ++i) {
        for (int j = 1; j <= i; ++j) {
            bool isBrown = 2 * i + 2 * j == brown + 4;
            bool isYellow = (i - 2) * (j - 2) == yellow;
            if (isBrown && isYellow) {
                answer.push_back(i);
                answer.push_back(j);
                break;
            }
        }
    }
    return answer;
}