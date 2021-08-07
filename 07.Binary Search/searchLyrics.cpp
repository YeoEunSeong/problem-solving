// 문제 및 풀이: https://velog.io/@e7838752/programmers-findLyrics
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int countByRange(vector<string> &v, string leftValue, string rightValue) {
    vector<string>::iterator rightIndex = upper_bound(v.begin(), v.end(), rightValue);
    vector<string>::iterator leftIndex = lower_bound(v.begin(), v.end(), leftValue);

    return rightIndex - leftIndex;
}

string replaceAll(string s, char from, char to) {
    for(int i = 0; i < s.size(); ++i) {
        s[i] = s[i] == from ? to : s[i];
    }
    return s;
}

vector<string> arr[100001];
vector<string> reversed_arr[100001];

vector<int> solution(vector<string> words, vector<string> queries) {

    vector<int> answer;
    for(string word : words) {
        arr[word.size()].push_back(word);
        reverse(word.begin(), word.end());
        reversed_arr[word.size()].push_back(word);
    }
    
    for(int i = 0; i<100001; ++i) {
        sort(arr[i].begin(), arr[i].end());
        sort(reversed_arr[i].begin(), reversed_arr[i].end());
    }
    
    for(string query : queries) {
        if(query[0] != '?') {
            answer.push_back(countByRange(arr[query.size()], replaceAll(query, '?', 'a'), replaceAll(query, '?', 'z')));
        }
        else {
            reverse(query.begin(), query.end());
            answer.push_back(countByRange(reversed_arr[query.size()], replaceAll(query, '?', 'a'), replaceAll(query, '?', 'z')));
        }
    }
    
    return answer;
}