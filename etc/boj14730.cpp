// 문제 및 풀이: https://velog.io/@e7838752/boj14730
#include <iostream>
#include <algorithm>

using namespace std;

int n;

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n;
  int result = 0;
  for (int i = 0; i < n; i++) {
    int coef, expo;
    cin >> coef >> expo;

    result += coef * expo;
  }

  cout << result;
}