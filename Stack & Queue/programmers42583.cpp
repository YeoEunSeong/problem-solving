// 문제 및 풀이: https://velog.io/@e7838752/programmers42538
#include <string>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int solution(int bridge_length, int weight, vector<int> truck_weights) {
    int answer = 1;
    int currentWeight = 0;
    queue<pair<int, int>> q;
    
    for (int i = 0;  i < truck_weights.size(); ++i) {
        while (currentWeight + truck_weights[i] > weight || q.size() >= bridge_length) {
            currentWeight -= q.front().first;
            answer = max(answer, q.front().second + bridge_length);
            q.pop();
        }
        q.push({truck_weights[i], answer++});
        currentWeight += truck_weights[i];
    }
    
    while (!q.empty()) {
        answer = q.front().second + bridge_length;
        q.pop();
    }
    return answer;
}