// 문제와 풀이 블로그: https://velog.io/@e7838752/BOJ16398
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int v;
int parent[1001];
vector<pair<int, pair<int, int> > > graph;

int findParent(int x) {
  if(x == parent[x]) return x;
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

  cin>>v;

  for (int i = 0; i < v; i++) {
    parent[i] = i;
  }
  
  for (int i = 0; i < v; i++) {
    for (int j = 0; j < v; j++){
      int x;
      cin>>x;
      if (i < j) graph.push_back(make_pair(x, make_pair(i, j)));
    }
  }

  sort(graph.begin(), graph.end());

  long long totalCost = 0;
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