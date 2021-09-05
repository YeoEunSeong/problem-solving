// 문제 및 풀이: https://velog.io/@e7838752/programmers42895
#include <string>
#include <vector>
#include <queue>
#include <set>

using namespace std;

set<int> arr[9];

int makeNewN(int n, int count) {
    int result = n;
    for (int i = 1; i < count; ++i) {
        result *= 10;
        result += n;
    }
    return result;
}

int solution(int N, int number) {
    int answer = -1;
    for (int i = 1; i < 9; ++i) {
        int newN = makeNewN(N, i);
        if (newN == number) return i;
        arr[i].insert(newN);
    }
    
    for (int i = 2; i < 9; ++i) {
        for (int j = 1; j < i; ++j) {
            for (auto it = arr[j].begin(); it != arr[j].end(); ++it) {
                int a = *it;
                if (a == number) return j;
                
                for(auto itb = arr[i-j].begin(); itb != arr[i-j].end(); ++itb) {
                    int b = *itb;
                    if (a == 0 || b == 0) continue;
                    arr[i].insert(a + b);
                    arr[i].insert(a - b);
                    arr[i].insert(a * b);
                    arr[i].insert(a / b);
                }
            }
        }
    }
    for (auto it = arr[8].begin(); it != arr[8].end(); ++it) {
        if (*it == number) return 8;
    }
    
    return answer;
}