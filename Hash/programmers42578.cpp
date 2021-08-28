// 문제 및 풀이: https://velog.io/@e7838752/programmers42578
#include <iostream>
#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<vector<string>> clothes) {
    int answer = 1;
    map<string, int> m;
    for (vector<string> cloth : clothes) {
        string type = cloth[1];
        if (m.find(type) != m.end()) {
            m[type]++;
        }
        else {
            m.insert({type, 1});
        }
    }
    
    for (auto it = m.begin(); it != m.end(); ++it) {
        answer *= (it->second) +1;
    }
    
    return --answer;
}