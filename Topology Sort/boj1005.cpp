// 문제 및 풀이: https://velog.io/@e7838752/boj1005
#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;


int n, m, w;
vector<int> answer;

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int t;
  cin >> t;
  for (int tc = 0; tc < t; tc++) {
    int arr[1001];
    int indegree[1001] = {0, };
    vector<int> graph[1001];
    int d[1001] = {0 ,};

    cin >> n >> m;
    for (int i = 1; i <= n; i++) {
      cin >> arr[i];
    }
    
    for (int i = 0; i < m; i++) {
      int a, b;
      cin >> a >> b;
      graph[a].push_back(b);
      indegree[b]++;
    }

    cin >> w;

    queue<int> q;

    for (int i = 1; i <= n; i++) {
      if (indegree[i] == 0) {
        q.push(i);
        d[i] = arr[i];
      }
    }

    while (!q.empty()) {
      int now = q.front();
      if (now == w) break;
      q.pop();

      for (int i = 0; i < graph[now].size(); i++) {
        int next = graph[now][i];
        if (--indegree[next] == 0) q.push(next);

        d[next] = max(d[next], d[now] + arr[next]);
      }
    }
    
    answer.push_back(d[w]);
  }
  
  for (int i = 0; i < t; i++) {
    cout << answer[i]<<endl;
  }
}