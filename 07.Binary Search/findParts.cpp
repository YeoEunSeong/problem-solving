
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
vector<int> arr;
vector<int> target;

bool binarySearch(vector<int> &arr, int target, int start, int end) {
  while (start <= end) {
    int mid = (start + end) / 2;
    if (arr[mid] == target) return true;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  
  return false;
}

int main(void) {
  cin >> n >> m;

  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  for (int i = 0; i < m; i++) {
    int x;
    cin >> x;
    target.push_back(x);
  }

  sort(arr.begin(), arr.end());

  for (int i = 0; i < m; i++) {
    if(binarySearch(arr, target[i], 0, n-1)) cout<<"yes ";
    else cout<<"no";
  }
}