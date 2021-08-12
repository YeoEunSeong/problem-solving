// 문제 및 풀이: https://velog.io/@e7838752/boj2252
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int n, m;
int indegree[32001];
vector<int> graph[32001];

void topologySort() {
  queue<int> q;
  vector<int> result;

  for (int i = 1; i <= n; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
  }

  while (!q.empty()) {
    int now = q.front();
    result.push_back(now);
    q.pop();

    for (int i = 0; i < graph[now].size(); i++) {
      int next = graph[now][i];
      if (--indegree[next] == 0) q.push(next);
    }
  }

  for (int i = 0; i < result.size(); i++) {
    cout <<result[i]<<" ";
  }
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> m;
  for (int i = 0; i < m; i++) {
    int a, b;
    cin >> a >> b;
    graph[a].push_back(b);
    indegree[b]++;
  }
  
  topologySort();
}