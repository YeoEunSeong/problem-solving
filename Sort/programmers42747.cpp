// 문제 및 풀이: https://velog.io/@e7838752/programmers42747
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> citations) {
    int answer = 0;
    
    sort(citations.begin(), citations.end());
    for (int i = 0; i <= 1000 ; ++i) {
        int result = -1;
        for (int j = 0; j < citations.size(); ++j) {
            if (i <= citations[j]) {
                result = citations.size() - j;
                break;
            }
        }
        if (i <= result) answer = i;
    }
    
    return answer;
}