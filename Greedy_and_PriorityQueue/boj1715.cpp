#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);
  int answer = 0;
  priority_queue<int> pq;

  int n;
  cin >> n;

  for (int i = 0; i < n; i++)
  {
    int temp;
    cin >> temp;
    pq.push(-temp);
  }

  while (pq.size() > 1)
  {
    int a = -pq.top();
    pq.pop();
    int b = -pq.top();
    pq.pop();

    answer += a + b;
    pq.push(-(a + b));
  }
  cout << answer;
}