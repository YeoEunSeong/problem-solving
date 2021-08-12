// 문제 및 풀이: https://velog.io/@e7838752/BOJ14621
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int parent[1001];
bool gender[1001];
vector<pair<int, pair<int, int> > > v;

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

  int n, m;
  cin >> n >> m;

  for (int i = 1; i <= n; i++) {
    char gen;
    cin >> gen;

    gender[i] = gen =='M' ? true : false;
    parent[i] = i;
  }

  for (int i = 0; i < m; i++) {
    int a, b, cost;
    cin >> a >> b >> cost;

    v.push_back(make_pair(cost, make_pair(a, b)));
  }

  sort(v.begin(), v.end());

  int totalCost = 0;
  for (int i = 0; i < m; i++) {
    int a = v[i].second.first;
    int b = v[i].second.second;
    int cost = v[i].first;

    if ((findParent(a) != findParent(b)) && (gender[a] ^ gender[b])) {
      totalCost += cost;
      unionParent(a, b);
    }
  }

  bool isConnected = true;
  for (int i = 1; i < n; i++) {
    if (findParent(i) != findParent(i+1)) {
      isConnected = false;
      break;
    }
  }
  
  if (isConnected) cout << totalCost;
  else cout<< -1;
}