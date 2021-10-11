#include <iostream>
#include <algorithm>

using namespace std;

int n, m;
int arr[10000];

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = 0;
  cin >> n >> m;
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  int sum = 0;
  int lt = 0;
  for (int rt = 0; rt < n; rt++)
  {
    sum += arr[rt];

    while (m < sum)
      sum -= arr[lt++];
    answer += sum == m ? 1 : 0;
  }
  cout << answer;
}