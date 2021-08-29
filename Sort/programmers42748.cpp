// 문제 및 풀이: https://velog.io/@e7838752/programmers42748
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    
    for (vector<int> command : commands) {
        int start = command[0] - 1;
        int end = command[1];
        int number = command[2] - 1;
        
        vector<int> temp;
        for (int i = start; i < end; ++i) {
            temp.push_back(array[i]);
        }
        sort(temp.begin(), temp.end());
        answer.push_back(temp[number]);
    }
    return answer;
}