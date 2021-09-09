// 문제 및 풀이: https://velog.io/@e7838752/boj5427
#include <iostream>
#include <algorithm>
#include <queue>
#define INF 987654321
using namespace std;

int n, m;
char map[1000][1000];
int dx[] = {0, 1, 0, -1};
int dy[] = {-1, 0, 1, 0};

int bfs() {
  int route[1000][1000] = {0, };
  queue<pair<int, pair<int, int> > > q;

  int startX, startY;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (map[i][j] == '@') {
        startX = i;
        startY = j;
        map[i][j] = '.';
      }
      else if (map[i][j] == '*') {
        q.push(make_pair(1, make_pair(i, j)));
      }
    }
  }
  q.push(make_pair(0, make_pair(startX, startY)));
  
  while (!q.empty()) {
    int type = q.front().first;
    int x = q.front().second.first;
    int y = q.front().second.second;
    q.pop();

    if (type == 0 && (x == 0 || x == n - 1 || y == 0 || y == m - 1)) return route[x][y] + 1;

    for (int i = 0; i < 4; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (map[nx][ny] == '#' || map[nx][ny] == '*') continue;
      
      if (type == 0) {
        if (route[nx][ny] != 0 || (nx == startX && ny == startY)) continue;
        route[nx][ny] = route[x][y] + 1;
        q.push(make_pair(type, make_pair(nx, ny)));
      }
      else {
        map[nx][ny] = '*';
        q.push(make_pair(type, make_pair(nx, ny)));
      }
    }
  }
  
  return INF;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int testCase;
  cin >> testCase;
  for (int tc = 0; tc < testCase; tc++) {
    cin >> m >> n;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        cin >> map[i][j];
      }
    }

    int answer = bfs();
    if (answer == INF) cout << "IMPOSSIBLE\n";
    else cout << answer << endl;
  } 
}