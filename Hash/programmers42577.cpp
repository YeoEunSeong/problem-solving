// 문제 및 풀이: https://www.welcomekakao.com/learn/courses/30/lessons/42577
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool solution(vector<string> phone_book) {
    sort(phone_book.begin(), phone_book.end());
    
    for (int i = 0; i < phone_book.size() - 1; ++i) {
        string numberA = phone_book[i];
        string numberB = phone_book[i+1].substr(0, numberA.size());
        if (numberA == numberB) return false;
    }
   
    return true;
}