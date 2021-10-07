// 문제 및 풀이: https://velog.io/@e7838752/BOJ13422
#include <iostream>
#include <algorithm>

using namespace std;

int arr[100000];

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int testCase;
  cin >> testCase;
  
  for (int tc = 0; tc < testCase; tc++) {
    int n, m, k;
    cin >> n >> m >> k;

    for (int i = 0; i < n; i++) {
      cin >> arr[i];
    }

    int start = 0, end = m;
    int moneyStolen = 0;
    int answer = 0;
    for (int i = 0; i < m; i++) {
      moneyStolen += arr[i];
    }
    
    do {
      if (moneyStolen < k) {
        answer++;
      }
      moneyStolen -= arr[start];
      moneyStolen += arr[end];
      start = (start + 1) % n;
      end = (end + 1) % n;
    } while (start != 0 && n != m);
    
    cout << answer<<endl;
  } 
}