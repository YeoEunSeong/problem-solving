// 문제 및 풀이: https://velog.io/@e7838752/boj2023
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <cmath>

using namespace std;

int n;

bool isPrimeNumber(int num) {
  if (num < 2) return false;
  for (int i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n;
  queue<int> q;
  for (int i = 0; i < 9; i++) {
    if (isPrimeNumber(i)) q.push(i);
  }
  
  int mod = pow(10, n - 1);
  while (!q.empty()) {
    int number = q.front();
    q.pop();
    if (number / mod >= 1) {
      cout << number << endl;
      continue;
    }

    number *= 10;
    for (int i = 1; i <= 9; i++) {
      number += i;

      if (isPrimeNumber(number)) {
        q.push(number);
      }

      number -= i;
    }
  }
}