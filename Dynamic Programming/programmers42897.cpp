// 문제 및 풀이: https://velog.io/@e7838752/programmers42897
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> money) {
    int d1[1000001];
    
    d1[0] = money[0];
    d1[1] = max(money[0], money[1]);
    
    for (int i = 2; i < money.size() - 1; ++i) {
        d1[i] = max(d1[i-2] + money[i], d1[i-1]);
    }
    
    int d2[1000001];
    d2[1] = money[1];
    d2[2] = max(money[1], money[2]);
    
    for (int i = 3; i < money.size(); ++i) {
        d2[i] = max(d2[i-2] + money[i], d2[i-1]);
    }
    
    return max(d1[money.size() - 2], d2[money.size()-1]);
}