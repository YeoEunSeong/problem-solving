// 문제 및 풀이: https://velog.io/@e7838752/programmers42584
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> prices) {
    vector<int> answer;
    for (int i = 0; i < prices.size(); ++i) {
        int time = prices.size() - 1 - i;
        for (int j = i + 1; j < prices.size(); ++j) {
            if (prices[i] > prices[j]) {
                time = j - i;
                break;
            }
        }
        answer.push_back(time);
    }
    return answer;
}