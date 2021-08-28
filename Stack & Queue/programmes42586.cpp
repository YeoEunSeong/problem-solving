// 문제 및 풀이: https://velog.io/@e7838752/programmers42584
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    int size = progresses.size();
    int start = 0;
    
    while (start < size) {
        int newFeatures = 0;
        for (int i = start; i < size; ++i) {
            progresses[i] += speeds[i];
        }
        
        for (int i = start; i < size; ++i) {
            if (progresses[i] < 100) break;
            start++;
            newFeatures++;
        }
        
        if (newFeatures > 0) {
            answer.push_back(newFeatures);
        }
    }
    return answer;
}