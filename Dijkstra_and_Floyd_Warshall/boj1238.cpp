문제 및 풀이: https://velog.io/@e7838752/boj1238
#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>
#define INF 987654321

using namespace std;

int n, m, x;
vector<pair<int, int> > graph[1001];
int d[1001];
int answer[1001];

void dijkstra(int start) {
  priority_queue<pair<int, int> > pq;
  pq.push(make_pair(0, start));
  d[start] = 0;

  while (!pq.empty()) {
    int dist = -pq.top().first;
    int now = pq.top().second;
    pq.pop();

    if (dist < d[now]) continue;
    
    for (int i = 0; i < graph[now].size(); i++) {
      int next = graph[now][i].first;
      int cost = dist + graph[now][i].second;

      if (cost < d[next]) {
        d[next] = cost;
        pq.push(make_pair(-cost, next));
      }
    }
  }
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> m >> x;
  for (int i = 0; i < m; i++) {
    int a, b, c;
    cin >> a >> b >> c;

    graph[a].push_back(make_pair(b, c));
  }
  
  for (int i = 1; i <= n; i++) {
    fill_n(d, 1001, INF);
    dijkstra(i);
    answer[i] += d[x];
  }

  fill_n(d, 1001, INF);
  dijkstra(x);
  for (int i = 1; i <= n; i++) {
    answer[i] += d[i];
  }

  int maxValue = -INF;

  for (int i = 1; i <= n; i++) {
    maxValue = max(maxValue, answer[i]);
  }
  
  cout << maxValue;
}