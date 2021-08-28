// 문제 및 풀이: https://velog.io/@e7838752/programmers42576
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    sort(participant.begin(), participant.end());
    sort(completion.begin(), completion.end());
    
    for(int i=0; i<completion.size(); ++i) {
        if (completion[i] != participant[i]) {
            answer = participant[i];
            break;
        }
    }
    
    if (answer == "") {
        answer = participant[participant.size()-1];
    }
    return answer;
}