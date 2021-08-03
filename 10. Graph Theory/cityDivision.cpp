// 문제와 풀이 블로그 https://velog.io/@e7838752/BOJ1647
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
int parent[1000001];
vector<pair<int, pair<int,int> > > roads;

int findParent(int x) {
  if(x == parent[x]) return x;
  else return findParent(parent[x]);
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

  cin>>n>>m;

  for (int i = 1; i <= n; ++i) {
    parent[i] = i;
  }

  for (int i = 0; i < m; ++i) {
    int a, b, cost;
    cin>>a>>b>>cost;

    roads.push_back({cost, {a, b}});
  }
  
  sort(roads.begin(), roads.end());

  int totalCost = 0;
  int maxCost;
  for(int i=0; i<roads.size(); ++i) {
    int cost = roads[i].first;
    int a = roads[i].second.first;
    int b = roads[i].second.second;

    if(findParent(a) != findParent(b)) {
      totalCost += cost;
      maxCost = cost;
      unionParent(a, b);
    }
  }

  totalCost -= maxCost;
  cout<<totalCost;
}