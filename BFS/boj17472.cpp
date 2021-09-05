// 문제 및 풀이: https://velog.io/@e7838752/boj17472
#include <iostream>
#include <algorithm>
#include <queue>
#define INF 987654321

using namespace std;

int n, m;
int map[10][10];
int dx[] = {0, 1, 0, -1};
int dy[] = {-1, 0, 1, 0};
int parent[101];

void dfs(int x, int y, int land) {
  map[x][y] = land;

  for (int i = 0; i < 4; ++i) {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (map[nx][ny] == 1) dfs(nx, ny, land);
  }
}

pair<int, int> findRoute(int x, int y, int direction) {
  int land = map[x][y];
  int route = 0;

  while (true) {
    x += dx[direction];
    y += dy[direction];

    if (x < 0 || x >= n || y < 0 || y >= m) break;
    if (map[x][y] == land) break;

    if (map[x][y] != 0 && map[x][y] != land) return make_pair(route, map[x][y]);
    route++;
  }

  return make_pair(INF, -1);
}

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

  cin >> n >> m;
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < m; ++j) {
      cin >> map[i][j];
    }
  }

  for (int i = 2; i <= n * m; i++) {
    parent[i] = i;
  }
  

  int count = 2;
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < m; ++j) {
      if (map[i][j] == 1) {
        dfs(i, j, count++);
      }
    }
  }

  vector<pair<int, pair<int, int> > > v;
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < m; ++j) {
      if (map[i][j] > 1) {
        for (int k = 0; k < 4; ++k) {
          pair<int, int> p = findRoute(i, j, k);
          if (p.first == INF || p.first == 1) continue;
          v.push_back(make_pair(p.first, make_pair(map[i][j], p.second)));
        }
      }
    }
  }

  sort(v.begin(), v.end());

  int totalCost = 0;
  for (int i = 0; i < v.size(); i++) {
    int cost = v[i].first;
    int a = v[i].second.first;
    int b = v[i].second.second;

    if (findParent(a) != findParent(b)) {
      unionParent(a, b);
      totalCost += cost;
    }
  }
  
  bool isConnected = true;
  for (int i = 2; i < count; i++) {
    if (findParent(i) != findParent(2)) {
      isConnected = false;
      break;
    }
  }

  totalCost = isConnected ? totalCost : -1;
  cout << totalCost;
}