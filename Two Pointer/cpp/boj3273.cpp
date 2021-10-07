// 문제 및 풀이: https://velog.io/@e7838752/boj3273
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int n, target;
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

  cin >> target;

  sort(arr.begin(), arr.end());

  int start = 0, end = n-1;
  int answer = 0;
  while (start < end) {
    int sum = arr[start] + arr[end];
    if (sum == target) {
      answer++;
      start++;
      end--;
    }
    else if(sum < target) {
      start++;
    }
    else {
      end--;
    }
  }
  cout<<answer;
}