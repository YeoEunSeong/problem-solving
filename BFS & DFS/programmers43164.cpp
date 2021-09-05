// 문제 및 풀이: https://velog.io/@e7838752/programmers43163
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool visited[100001] = {0, };

bool dfs(string departure, vector<vector<string>> &tickets, vector<string> &answer) {
    if (answer.size() == tickets.size() + 1) return true;
    
    for (int i = 0; i < tickets.size(); ++i) {
        if (visited[i]) continue;
        if (tickets[i][0] == departure) {
            visited[i] = true;
            answer.push_back(tickets[i][1]);
            if (dfs(tickets[i][1], tickets, answer)) return true;
            
            visited[i] = false;
            answer.pop_back();
        }
    }
    return false;
}

vector<string> solution(vector<vector<string>> tickets) {
    vector<string> answer;
    sort(tickets.begin(), tickets.end());
    answer.push_back("ICN");
    dfs("ICN", tickets, answer);
    return answer;
}