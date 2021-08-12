// 문제 및 풀이: https://velog.io/@e7838752/BOJ16562
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m, k;
int parent[10001];
bool friendship[10001] = {0, };

int findParent(int x) {
  if (x == parent[x]) return x;
  else return parent[x] = findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> m >> k;

  for (int i = 1; i <= n; i++) {
    parent[i] = i;
  }
  
  vector<pair<int, int> > friendMoney;
  for (int i = 1; i <= n; i++) {
    int x;
    cin >> x;
    friendMoney.push_back(make_pair(x, i));
  }

  for (int i = 0; i < m; i++) {
    int a, b;
    cin >> a >> b;
    unionParent(a, b);
  }


  sort(friendMoney.begin(), friendMoney.end());

  int cost = 0;
  for (int i = 0; i < n; i++) {
    int money = friendMoney[i].first;
    int x = friendMoney[i].second;

    if (!friendship[x]) {
      cost += money;
      friendship[x] = true;
      
      for (int j = 0; j < n; j++) {
        if(findParent(x) == findParent(friendMoney[j].second)) {
          friendship[friendMoney[j].second] = true;
        }
      }
    }
  }

  bool answer = true;
  for (int i = 1; i <= n; i++) {
    if(!friendship[i]) {
      cout<<i<<endl;
      answer = false;
      break;
    }
  }

  if (answer && cost <= k) cout<<cost;
  else cout<<"Oh no";
  
}