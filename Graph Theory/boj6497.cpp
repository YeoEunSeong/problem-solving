// 문제 및 풀이: https://velog.io/@e7838752/BOJ6497
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int parent[200000];


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

  while (true) {
    vector<pair<int, pair<int, int> > > v;
    int m, n;
    cin >> m >> n;

    if (m == 0 && n == 0) break;

    for (int i = 0; i < n; i++) {
      parent[i] = i;
    }
    
    
    int totalCost = 0;
    for (int i = 0; i < n; i++) {
      int a, b, cost;
      cin >> a >> b >> cost;
      
      totalCost += cost;
      v.push_back(make_pair(cost, make_pair(a, b)));
    }
    sort(v.begin(), v.end());

    int newCost = 0;
    for (int i = 0; i < v.size(); i++) {
      int a = v[i].second.first;
      int b = v[i].second.second;
      int cost = v[i].first;

      if (findParent(a) != findParent(b)) {
        newCost += cost;
        unionParent(a, b);
      }
    }
    cout << totalCost - newCost<<endl;
  }
  
}