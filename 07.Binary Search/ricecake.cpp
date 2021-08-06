#include <iostream>
#include <vector>

using namespace std;

int n, target;
vector<int> arr;

long long binarySearch(vector<int> &arr, int target, int start, int end) {
  long long result;
  while (start <= end) {
    int mid = (start + end) / 2;
    long long sum = 0;

    for (int i = 0; i < n; i++) {
      sum += arr[i] - mid > 0 ? arr[i] - mid : 0;
    }

    if (sum < target) end = mid - 1;
    else {
      result = sum;
      start = mid + 1;
    }
  }
  return result;
}

int main(void) {
  cin >> n >> target;

  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  cout<< binarySearch(arr, target, 0, 2000000000);
}