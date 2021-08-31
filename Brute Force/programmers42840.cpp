// 문제 및 풀이: https://velog.io/@e7838752/programmers42840
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> answers) {
    int size = answers.size();
    vector<int> v1(size);
    vector<int> v2(size);
    vector<int> v3(size);
    
    for (int i = 0; i < size; ++i) {
        v1[i] = (i % 5) + 1;
    }
    
    int indexV2 = 0;
    int arr2[4] = {1, 3, 4, 5};
    for (int i = 0; i < size; ++i) {
        if (i % 2 == 0) v2[i] = 2;
        else v2[i] = arr2[(indexV2++) % 4];
    }
    
    int arr3[10] = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    for (int i = 0; i < size; ++i) {
        v3[i] = arr3[i % 10];
    }
    
    vector<int> answer;
    int correctA = 0;
    int correctB = 0;
    int correctC = 0;
    
    for (int i = 0; i < size; ++i) {
        if (answers[i] == v1[i]) correctA++;
        if (answers[i] == v2[i]) correctB++;
        if (answers[i] == v3[i]) correctC++;
    }
    
    int maxValue = max(max(correctA, correctB), correctC);
    if (maxValue == correctA) answer.push_back(1);
    if (maxValue == correctB) answer.push_back(2);
    if (maxValue == correctC) answer.push_back(3);
    
    return answer;
}