#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>
#define INF 987654321

using namespace std;

int n, m, c;
vector<pair<int, int> > graph[30001];
int d[30001];

void dijkstra(int start) {
  priority_queue<pair<int, int> > pq;
  pq.push(make_pair(0, start));
  d[start] = 0;

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

  cin >> n >> m >> c;
  for (int i = 0; i < m; i++) {
    int x, y, z;
    cin >> x >> y >> z;
    graph[x].push_back(make_pair(y, z));
  }

  fill_n(d, 30001, INF);
  dijkstra(c);

  int numberOfCity = 0;
  int totalTime = 0;
  for (int i = 1; i <= n; i++) {
    if (i != c && d[i] != INF) {
      numberOfCity++;
      totalTime = max(totalTime, d[i]);
    }
  }
  cout << numberOfCity << " " << totalTime;
}