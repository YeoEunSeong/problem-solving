#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = 0;
  int arr1[50];
  int arr2[50];

  int n;
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    cin >> arr1[i];
  }

  for (int i = 0; i < n; i++)
  {
    cin >> arr2[i];
  }

  sort(arr1, arr1 + n);
  sort(arr2, arr2 + n, greater<int>());
  for (int i = 0; i < n; i++)
  {
    answer += arr1[i] * arr2[i];
  }

  cout << answer;
}