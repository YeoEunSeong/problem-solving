// 문제 및 풀이: https://velog.io/@e7838752/programmers43165
#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> numbers, int target) {
    int answer = 0;
    queue<vector<int>> q;
    q.push({1});
    q.push({-1});
    
    while(!q.empty()) {
        vector<int> temp = q.front();
        q.pop();
        if (temp.size() == numbers.size()) {
            int sum = 0;
            for (int i = 0; i < temp.size(); ++i) {
                sum += numbers[i] * temp[i];
            }
            if (sum == target) answer++;
        }
        else {
            temp.push_back(1);
            q.push(temp);
            
            temp.pop_back();
            temp.push_back(-1);
            q.push(temp);
        }
    }
    return answer;
}