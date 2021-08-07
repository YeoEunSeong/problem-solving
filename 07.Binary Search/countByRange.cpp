// 문제 및 풀이: https://velog.io/@e7838752/countByRange
#include <iostream>
#include <vector>

using namespace std;

int n, target;
vector<int> arr;

int countByRange(vector<int> &arr, int leftValue, int rightValue) {
  vector<int>::iterator rightIndex = upper_bound(arr.begin(), arr.end(), rightValue);
  vector<int>::iterator leftIndex = lower_bound(arr.begin(), arr.end(), leftValue);

  return rightIndex - leftIndex;
}

int main() {
  cin >> n >> target;
  
  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  int answer = countByRange(arr, target, target);
  if (answer == 0) cout<< -1;
  else cout<<answer;
}