// 문제 및 풀이: https://velog.io/@e7838752/programmers42746
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(string &a, string &b) {
    return a + b > b + a;
}

string solution(vector<int> numbers) {
    string answer = "";
    vector<string> strNumbers;
    for (int number : numbers) {
        strNumbers.push_back(to_string(number));
    }
    
    sort(strNumbers.begin(), strNumbers.end(), compare);
    for (string number : strNumbers) {
        answer += number;
    }
    
    answer = answer[0] == '0' ? "0" : answer;
    return answer;
}