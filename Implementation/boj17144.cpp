// 문제 및 풀이: https://velog.io/@e7838752/boj17144
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;

int n, m, t;
int map[50][50];
int airCleanerX = -1;

int dx[] = {0, -1, 0, 1};
int dy[] = {1, 0, -1, 0};

void spreadFineDust() {
  int temp[50][50] = {0, };

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (map[i][j] > 0) {
        int mountOfSpreadDust = 0;
        for (int k = 0; k < 4; k++) {
          int nx = i + dx[k];
          int ny = j + dy[k];

          if (nx < 0 | nx >= n || ny < 0 || ny >= m) continue;
          if (map[nx][ny] == -1) continue;

          temp[nx][ny] += map[i][j] / 5;
          mountOfSpreadDust += map[i][j] / 5;
        }
        temp[i][j] -= mountOfSpreadDust;
      }
    }
  }

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (map[i][j] == -1) continue;
      map[i][j] += temp[i][j];
    }
  }
}

void turnAirCleaner() {
  for (int i = airCleanerX -1; i > 0; i--) {
    map[i][0] = map[i-1][0];
  }

  for (int i = 0; i < m - 1; i++) {
    map[0][i] = map[0][i + 1];
  }

  for (int i = 0; i < airCleanerX; i++) {
    map[i][m - 1] = map[i + 1][m - 1];
  }

  for (int i = m - 1; i > 1; i--) {
    map[airCleanerX][i] = map[airCleanerX][i - 1];
  }
  map[airCleanerX][1] = 0;

  for (int i = airCleanerX + 2; i < n - 1; i++) {
    map[i][0] = map[i + 1][0];
  }

  for (int i = 0; i < m - 1; i++) {
    map[n - 1][i] = map[n - 1][i + 1];
  }

  for (int i = n - 1; i > airCleanerX + 1; i--) {
    map[i][m - 1] = map[i - 1][m - 1];
  }

  for (int i = m - 1; i > 1; i--) {
    map[airCleanerX + 1][i] = map[airCleanerX + 1][i - 1]; 
  }
  map[airCleanerX + 1][1] = 0;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> m >> t;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      cin >> map[i][j];

      if (airCleanerX == -1 && map[i][j] == -1) {
        airCleanerX = i;
      } 
    }
  }

  for (int second = 0; second < t; second++) {
    spreadFineDust();
    turnAirCleaner();
  }

  int answer = 0;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
      if (map[i][j] <= 0) continue;
      answer += map[i][j];
    }
  }
  
  cout << answer;
}