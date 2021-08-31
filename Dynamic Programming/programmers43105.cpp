// 문제 및 풀이: https://velog.io/@e7838752/boj1932
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<vector<int>> triangle) {
    int d[500][500];
    d[0][0] = triangle[0][0];
    
    for (int i = 1; i < triangle.size(); ++i) {
        d[i][0] = d[i-1][0] + triangle[i][0];
        for (int j = 1; j < triangle[i].size() - 1; ++j) {
            d[i][j] = max(d[i-1][j], d[i-1][j-1]) + triangle[i][j];
        }
        d[i][triangle[i].size()-1] = d[i-1][triangle[i].size() - 2] + triangle[i][triangle[i].size()-1];
    }
    
    int answer = 0;
    for (int i = 0; i < triangle[triangle.size()-1].size(); ++i) {
        answer = max(answer, d[triangle.size()-1][i]);
    }
    return answer;
}