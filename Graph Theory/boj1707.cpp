// 문제 및 풀이: https://velog.io/@e7838752/boj1707
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

int v, e;
vector<int> graph[20001];
int arr[20001] ={0, };

void bfs(int start) {
  queue<int> q;
  q.push(start);
  arr[start] = 1;

  while (!q.empty()) {
    int now = q.front();
    q.pop();

    for (int i = 0; i < graph[now].size(); i++) {
      int next = graph[now][i];
      if (arr[next] != 0) continue;
      
      arr[next] = arr[now] * -1;
      q.push(next);
    }
  }
}

bool checkBinaryGraph() {
  for (int i = 1; i <= v; i++) {
    for (int j = 0; j < graph[i].size(); j++) {
      if (arr[i] * arr[graph[i][j]] == 1) return false;
    }
  }
  return true;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int k;
  cin >> k;

  for (int testcase = 0; testcase < k; testcase++) {
    cin >> v >> e;
    for (int i = 0; i < e; i++) {
      int a, b;
      cin >> a >> b;
      graph[a].push_back(b);
      graph[b].push_back(a);
    }

    bool isBinaryGraph = true;
    for (int i = 1; i <= v; i++) {
      if(arr[i] != 0) continue;
      bfs(i);

      if(!checkBinaryGraph()) {
        isBinaryGraph = false;
        break;
        }
    }
    
    if (isBinaryGraph) cout<<"YES\n";
    else cout<<"NO\n";

    fill_n(arr, 20001, 0);
    for (int i = 0; i <= v; i++) {
      graph[i].clear();
    }
  }
}