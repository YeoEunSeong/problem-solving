// 문제 및 풀이: https://velog.io/@e7838752/programmers84325
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string getWord(string s, int &index) {
    string word = "";
    
    while (true) {
        if (index >= s.size() || s[index] == ' ') break;
        word += s[index++];
    }
    
    return word;
}

string solution(vector<string> table, vector<string> languages, vector<int> preference) {
    string answer = "";
    sort(table.begin(), table.end());

    vector<vector<string>> score(table.size());
    for (int i = 0; i < table.size(); ++i) {
        int index = 0;
        string temp = getWord(table[i], index);
        index++;
        
        while (index < table[i].size()) {
            temp = getWord(table[i], index);
            index++;
            
            score[i].push_back(temp);
        }
    }
    
    vector<int> result(table.size(), 0);
    for (int i = 0; i < languages.size(); ++i) {
        for (int j = 0; j < score.size(); ++j) {
            for (int k = 0; k < score[j].size(); ++k) {
                if (score[j][k] == languages[i]) {
                    result[j] += (5 - k) * preference[i];
                }
            }
        }
    }
    
    int maxValue = 0;
    for (int i = 0; i < result.size(); ++i) {
        maxValue = max(maxValue, result[i]);
    }
    
    for (int i = 0; i < result.size(); ++i) {
        if (result[i] == maxValue) {
            int index = 0;
            answer = getWord(table[i], index);
            break;
        }
    }
    return answer;
}