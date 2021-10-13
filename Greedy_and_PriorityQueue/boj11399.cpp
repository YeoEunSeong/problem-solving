#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = 0;
  int arr[1001];
  int n;
  cin >> n;

  arr[0] = 0;
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i + 1];
  }
  sort(arr + 1, arr + n + 1);

  for (int i = 1; i <= n; i++)
  {
    arr[i] += arr[i - 1];
    answer += arr[i];
  }
  cout << answer;
}