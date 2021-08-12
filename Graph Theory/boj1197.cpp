// 문제와 풀이 블로그 https://velog.io/@e7838752/BOJ1197
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int v, e;
int parent[10001];
vector<pair<int, pair<int, int> > > graph;

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

  cin>>v>>e;

  for (int i = 1; i <= v; i++) {
    parent[i] = i;
  }
  
  for (int i = 0; i < e; i++) {
    int a, b, cost;
    cin>>a>>b>>cost;

    graph.push_back({cost, {a, b}});
  }

  sort(graph.begin(), graph.end());

  int totalCost = 0;
  for (int i = 0; i < graph.size(); i++) {
    int cost = graph[i].first;
    int a = graph[i].second.first;
    int b = graph[i].second.second;

    if (findParent(a) != findParent(b)) {
      totalCost += cost;
      unionParent(a, b);
    }
  }
  
  cout<<totalCost;
}