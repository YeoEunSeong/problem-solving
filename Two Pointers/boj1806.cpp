#include <iostream>
#include <algorithm>
#define INF 987654321

using namespace std;

int nums[100000];
int n, s;

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = INF;
  int sum = 0;
  cin >> n >> s;

  for (int i = 0; i < n; i++)
  {
    cin >> nums[i];
  }

  int left = 0;
  for (int right = 0; right < n; right++)
  {
    sum += nums[right];

    while (s <= sum)
    {
      answer = min(answer, right - left + 1);
      sum -= nums[left++];
    }
  }

  answer = answer == INF ? 0 : answer;
  cout << answer;
}