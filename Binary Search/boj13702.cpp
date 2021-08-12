// 문제 및 풀이: https://velog.io/@e7838752/BOJ13702
#include <iostream>
#include <vector>
#define INF 2147483647

using namespace std;

int n, k;
int arr[10000];

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> k;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int start = 0;
  long long end = INF;
  long long answer;

  while (start <= end) {
    long long mid = (start + end) / 2;
    long long result = 0;

    for (int i = 0; i < n; i++) {
      result += arr[i] / mid;
    }

    if (result < k) { // 나눌 수 없음
      end = mid - 1;
    }
    else {
      answer = mid;
      start = mid + 1;
    }
  }

  cout<<answer;
}