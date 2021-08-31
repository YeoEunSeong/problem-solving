// 문제 및 풀이: https://velog.io/@e7838752/programmers42840
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> answers) {
    int arr2[8] = {2, 1, 2, 3, 2, 4, 2, 5};
    int arr3[10] = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    int correctArr[3] = {0, 0, 0};
    for (int i = 0; i < answers.size(); ++i) {
        if (answers[i] == (i % 5) + 1)  correctArr[0]++;
        if (answers[i] == arr2[i % 8])  correctArr[1]++;
        if (answers[i] == arr3[i % 10])  correctArr[2]++;
    }
        
    vector<int> answer;
    
    int maxValue = max(max(correctArr[0], correctArr[1]), correctArr[2]);
    if (maxValue == correctArr[0]) answer.push_back(1);
    if (maxValue == correctArr[1]) answer.push_back(2);
    if (maxValue == correctArr[2]) answer.push_back(3);
    
    return answer;
}