// 문제 및 풀이: https://velog.io/@e7838752/BOJ2470
#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>
#define INF 2000000000

using namespace std;

int n;
vector<int> arr;

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n;
  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  sort(arr.begin(), arr.end());

  int start = 0, end = n-1;

  int minIndex = end, maxIndex = start;
  int minValue = INF;
  while (start < end) {
    int result = arr[start] + arr[end];

    if (abs(result) < minValue) {
      minIndex = start;
      maxIndex = end;
      minValue = abs(result);

      if (result == 0) break;
    }
    
    if (result < 0) {
      start++;
    }
    else {
      end--;
    }
  }
  cout<<arr[minIndex]<<" "<<arr[maxIndex];
}