// 문제 및 풀이: https://velog.io/@e7838752/BOJ1300
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, k;

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> k;
  int start = 1;
  int end = k;
  int answer = 0;

  while (start <= end) {
    int mid = (start + end) / 2;
    long long result = 0;

    for (int i = 1; i <= n; i++) {
      result += min(n, mid / i);
    }
    
    if (result < k) {
      start = mid + 1;
    }
    else {
      answer = mid;
      end = mid - 1;
    }
  }
  
  cout<<answer;
}