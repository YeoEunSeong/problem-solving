// 문제 및 풀이: https://velog.io/@e7838752/programmers42839
#include <string>
#include <vector>
#include <set>

using namespace std;

bool visited[7] = {0, };
set<int> s;

bool isPrimeNumber(int n) {
    if (n < 2) return false;
    for (int i = 2; i*i <= n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

void dfs(int targetLength, string numbers, string number ="") {
    if (number.size() == targetLength) {
        int n = stoi(number);
        if (isPrimeNumber(n)) {
            s.insert(n);
        }
    }
    else {
        for (int i = 0; i < numbers.size(); ++i) {
            if (visited[i]) continue;
            number += numbers[i];
            visited[i] = true;
            
            dfs(targetLength, numbers, number);
            number.pop_back();
            visited[i] = false;
        }
    }
}

int solution(string numbers) {
    for (int i = 1; i <= numbers.size(); ++i) {
        dfs(i, numbers);
    }

    return s.size();
}