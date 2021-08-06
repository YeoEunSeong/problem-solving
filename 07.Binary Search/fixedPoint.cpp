// 문제 및 풀이: https://velog.io/@e7838752/15-2
#include <iostream>
#include <vector>

using namespace std;

int n;
vector<int> arr;

int binarySearch(vector<int> &arr, int start, int end) {
  while (start <= end) {
    int mid = (start + end) / 2;
    if (arr[mid] == mid) return mid;
    else if (arr[mid] < mid) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

int main(void) {
  cin >> n;

  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  int result = binarySearch(arr, 0, n - 1);
  if (result == -1) {
    cout << "원소가 존재하지 않습니다." << '\n';
  }
  else {
    cout << result + 1 << '\n';
  }
}