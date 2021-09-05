// 문제 및 풀이: https://velog.io/@e7838752/boj16236
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#define INF 987654321

using namespace std;

int n;
int map[20][20];
int dx[] = {0, 1, 0, -1};
int dy[] = {1, 0, -1, 0};

int babySharkX;
int babySharkY;
int babySharkSize = 2;
int babySharkEaten = 0;

class Shark {
public:
  int size;
  int x;
  int y;
  int distance;
  Shark(int size, int x, int y, int distance);
};

Shark::Shark(int size, int x, int y, int distance = INF) {
  this->size = size;
  this->x = x;
  this->y = y;
  this->distance = distance;
}

vector<Shark> sharkArr;

int bfs(Shark &shark) {
  int route[20][20] = {0, };
  queue<pair<int, int> > q;
  q.push(make_pair(babySharkX, babySharkY));

  while (!q.empty()) {
    int x = q.front().first;
    int y = q.front().second;
    q.pop();
    
    if (x == shark.x && y == shark.y) {
      return route[x][y];
    }
    
    for (int i = 0; i < 4; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (route[nx][ny] != 0) continue;
      if (babySharkSize < map[nx][ny]) continue;

      route[nx][ny] = route[x][y] + 1;
      q.push(make_pair(nx, ny));
    }
  }

  return INF;
}

bool compare(Shark &a, Shark &b) {
  if (a.distance == b.distance){
    if (a.x == b.x) {
      return a.y < b.y;
    }
    return a.x < b.x;
  }
  return a.distance < b.distance;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = 0;
  cin >> n;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      cin >> map[i][j];
      
      if (map[i][j] == 9) {
        babySharkX = i;
        babySharkY = j;
        map[i][j] = 0;
      }
      else if (0 < map[i][j]) {
        sharkArr.push_back(Shark(map[i][j], i, j));
      }
    }
  }

  while (true) {
    for (int i = 0; i < sharkArr.size(); i++) {
      if (sharkArr[i].size < babySharkSize) {
        sharkArr[i].distance = bfs(sharkArr[i]);
      }
    }

    sort(sharkArr.begin(), sharkArr.end(), compare);

    if (sharkArr.size() == 0 || sharkArr[0].distance == INF) break;

    answer += sharkArr[0].distance;
    map[sharkArr[0].x][sharkArr[0].y] = 0;
    babySharkX = sharkArr[0].x;
    babySharkY = sharkArr[0].y;
    sharkArr.erase(sharkArr.begin());
    
    babySharkEaten++;
    if (babySharkEaten == babySharkSize) {
      babySharkSize++;
      babySharkEaten = 0;
    }
  }
  
  cout << answer;
}