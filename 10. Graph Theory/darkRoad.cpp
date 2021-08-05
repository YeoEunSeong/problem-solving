// 문제 및 풀이: https://velog.io/@e7838752/darkRoad

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
int parent[2000001];
vector<pair<int, pair<int, int> > > roads;

int findParent(int x) {
  if(parent[x] == x) return x;
  else return findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);
  
  if(a < b) parent[b] = a;
  else parent[a] = b;
}

int main(){
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n>>m;

  for (int i = 0; i < n; i++) {
    parent[i] = i;
  }
  
  int totalCost = 0;
  for (int i = 0; i < m; i++) {
    int a, b, cost;
    cin>>a>>b>>cost;

    totalCost += cost;
    roads.push_back(make_pair(cost, make_pair(a, b)));
  }

  sort(roads.begin(), roads.end());

  int savedCost = 0;
  for (int i = 0; i < m; i++) {
    int cost = roads[i].first;
    int a = roads[i].second.first;
    int b = roads[i].second.second;

    if(findParent(a) != findParent(b)) {
      savedCost += cost;
      unionParent(a, b);
    }
  }
  
  cout<<totalCost - savedCost;
}
