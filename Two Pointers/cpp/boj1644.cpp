#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

vector<int> getPrimeNums(int n)
{
  vector<int> result;
  vector<bool> nums(n + 2, true);

  for (int i = 2; i * i <= n; i++)
    if (nums[i])
      for (int j = i * i; j <= n; j += i)
        nums[j] = false;

  for (int i = 2; i <= n; i++)
    if (nums[i])
      result.push_back(i);

  return result;
}

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = 0;
  int n;
  cin >> n;
  vector<int> primeNums = getPrimeNums(n);

  int lt = 0;
  int sum = 0;
  for (int rt = 0; rt < primeNums.size(); rt++)
  {
    sum += primeNums[rt];
    while (n < sum)
      sum -= primeNums[lt++];

    answer += sum == n ? 1 : 0;
  }

  cout << answer;
}