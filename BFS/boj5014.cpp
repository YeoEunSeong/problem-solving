// 문제 및 풀이: https://velog.io/@e7838752/boj5014
#include <iostream>
#include <algorithm>
#include <queue>

using namespace std;

int maxFloor, currentFloor, targetFloor, up, down;
bool visited[1000001] = {0, };

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int answer = -1;

  cin >> maxFloor >> currentFloor >> targetFloor >> up >> down;
  visited[currentFloor] = true;

  queue<pair<int, int> > q;
  q.push(make_pair(currentFloor, 0));

  while (!q.empty()) {
    currentFloor = q.front().first;
    int count = q.front().second;
    q.pop();

    if (currentFloor == targetFloor) {
      answer = count;
      break;
    }

    if (currentFloor + up <= maxFloor && !visited[currentFloor + up]) {
      q.push(make_pair(currentFloor + up, count + 1));
      visited[currentFloor + up] = true;
    }

    if (currentFloor - down >= 1 && !visited[currentFloor - down]) {
      q.push(make_pair(currentFloor - down, count + 1));
      visited[currentFloor - down] = true;
    }
  }
  
  if (answer == -1) cout<<"use the stairs";
  else cout << answer;
}