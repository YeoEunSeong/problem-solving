#include <iostream>
#include <algorithm>

using namespace std;

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int testcase;
  cin >> testcase;

  for (int tc = 0; tc < testcase; tc++)
  {
    int n;
    cin >> n;

    int count = 0;
    n--;
    for (int i = 2; i <= n; i++)
    {
      n -= i;
      count += n % i == 0 ? 1 : 0;
    }
    cout << count << endl;
  }
}