// 문제 및 풀이: https://velog.io/@e7838752/boj18352
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#define INF 987654321

using namespace std;

int n, m, k, x;
vector<int> graph[300001];
int route[300001];

void dijkstra() {
  queue<int> q;
  q.push(x);
  route[x] = 0;
  
  while (!q.empty()) {
    int node = q.front();
    q.pop();

    for (int i = 0; i < graph[node].size(); i++) {
      int nextNode = graph[node][i];
      if (route[nextNode] < INF) continue;
      route[nextNode] = route[node] + 1;
      q.push(nextNode);
    }
  }
}

void print() {
  for (int i = 1; i <= n; i++) {
    cout << route[i] << " ";
  }
  cout<<endl;
  
}
int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> m >> k >> x;
  fill_n(route, n + 1, INF);
  for (int i = 0; i < m; i++) {
    int a, b;
    cin >> a >> b;
    graph[a].push_back(b);
  }
  
  dijkstra();
  
  bool isEmpty = true;
  for (int i = 1; i <= n; i++) {
    if (route[i] == k) {
      cout << i << endl;
      isEmpty = false;
    }
  }

  if (isEmpty) {
    cout << -1;
  }
}