// 문제 및 풀이: https://velog.io/@e7838752/BOJ1806
#include <iostream>
#include <algorithm>
#define INF 987654321

using namespace std;

int n, target;
int arr[100000];

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> target;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int start = 0, end =0;
  int sum = arr[start];
  int result = INF;

  while (start < n && end < n) {
    if (target <= sum) {
      result = min(result, end - start + 1);
      sum -= arr[start];
      start++;
    }
    else {
      end++;
      sum += arr[end];
    }
  }
  if (result == INF) cout << 0;
  else cout << result;
}