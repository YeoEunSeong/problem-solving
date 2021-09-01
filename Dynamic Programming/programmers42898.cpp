// 문제 및 풀이: https://velog.io/@e7838752/programmers42898
#include <string>
#include <vector>

using namespace std;

int solution(int m, int n, vector<vector<int>> puddles) {
    int arr[101][101] = {0, };
    
    for (int i = 1; i < 101; ++i) {
        for (int j = 1; j < 101; ++j) {
            arr[i][j] = -1;
        }
    }
    for (vector<int> puddle : puddles) {
        arr[puddle[1]][puddle[0]] = 0;
    }
    
    arr[1][1] = 1;
    for (int i = 1; i <= n; ++i) {
        for (int j = 1; j <= m; ++j) {
            if (arr[i][j] == 0 || (i == 1 && j == 1)) continue;
            else arr[i][j] = (arr[i][j - 1] + arr[i-1][j]) % 1000000007;
        }
    }
    return arr[n][m];
}