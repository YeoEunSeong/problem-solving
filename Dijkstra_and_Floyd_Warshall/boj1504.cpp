// 문제 및 풀이: https://velog.io/@e7838752/boj1504
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#define INF 200001

using namespace std;

int n, e, v1, v2;
vector<pair<int, int> > graph[801];
int d[801];

void dijkstra(int start) {
  priority_queue<pair<int, int > > pq;
  d[start] = 0;
  pq.push(make_pair(0, start));

  while (!pq.empty()) {
    int dist = -pq.top().first;
    int now = pq.top().second;
    pq.pop();

    if (d[now] < dist) continue;
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

  int route1 = 0, route2 = 0;
  cin >> n >> e;
  for (int i = 0; i < e; i++) {
    int a, b, c;
    cin >> a >> b >> c;
    graph[a].push_back(make_pair(b, c));
    graph[b].push_back(make_pair(a, c));
  }

  cin >> v1 >> v2;

  fill_n(d, 801, INF);
  dijkstra(1);

  route1 = d[v1];
  route2 = d[v2];

  fill_n(d, 801, INF);
  dijkstra(v1);

  route1 += d[v2];
  route2 += d[v2];

  fill_n(d, 801, INF);
  dijkstra(n);

  route1 += d[v2];
  route2 += d[v1];

  int answer = min(route1, route2);
  if (INF <=answer) cout << -1;
  else cout << answer;
}