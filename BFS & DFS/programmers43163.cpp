// 문제 및 풀이: https://velog.io/@e7838752/programmers43163
#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(string begin, string target, vector<string> words) {
    int answer = 0;
    bool visited[50] = {0, };
    
    queue<pair<string, int>> q;
    q.push({begin, 0});
    
    while (!q.empty()) {
        string word = q.front().first;
        int depth = q.front().second;
        q.pop();
        
        if (word == target) {
            answer = depth;
            break;
        }
        
        for (int i = 0; i < words.size(); ++i) {
            if (visited[i]) continue;
            int count = 0;
            
            for (int j = 0; j < words[i].size(); ++j) {
                if (word[j] == words[i][j]) count++;
            }
            
            if (count == words[i].size() - 1) {
                q.push({words[i], depth + 1});
                visited[i] = true;
            }
        }
        
    }
    
    return answer;
}