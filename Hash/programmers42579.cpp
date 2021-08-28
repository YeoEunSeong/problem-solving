// 문제 및 풀이: https://velog.io/@e7838752/programmers42579
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

bool compare(pair<string, int> &a, pair<string, int> &b) {
    return a.second > b.second;
}

bool compareGenre(pair<int, int> &a, pair<int, int> &b) {
    if (a.first == b.first) return a.second < b.second;
    else return a.first > b.first;
}

vector<int> solution(vector<string> genres, vector<int> plays) {
    vector<int> answer;
    
    map<string, int> m;
    for (int i = 0; i<genres.size(); ++i) {
        string genre = genres[i];
        int play = plays[i];
        
        if(m.find(genre) != m.end()) {
            m[genre] += play;
        }
        else {
            m.insert({genre, play});
        }
    }
    
    vector<pair<string, int>> v(m.begin(), m.end());
    sort(v.begin(), v.end(), compare);
    
    for (int i = 0; i<v.size(); ++i) {
        vector<pair<int, int>> genreVector;
        string currentGenre = v[i].first;
        for (int j = 0; j<genres.size(); ++j) {
            if (currentGenre == genres[j]) {
                genreVector.push_back({plays[j], j});
            }
        }
        
        sort(genreVector.begin(), genreVector.end(), compareGenre);

        int size = min(2, genreVector.size())
        for(int i = 0; i < size; ++i) {
            answer.push_back(genreVector[i].second);    
        }
    }
    return answer;
}