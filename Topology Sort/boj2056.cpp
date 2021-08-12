// 문제 및 풀이: https://velog.io/@e7838752/boj2056
#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;

int indegree[10001] = {0, };
int arr[10001];
int d[10001];
vector<int> graph[10001];
int n;

void topologySort() {
  queue<int> q;

  for (int i = 1; i <= n; i++) {
    if (indegree[i] == 0) {
      q.push(i);
    }
    d[i] = arr[i];
  }


  while (!q.empty()) {
    int now = q.front();
    q.pop();

    for (int i = 0; i < graph[now].size(); i++) {
      int child = graph[now][i];
      if (--indegree[child] == 0) {
        q.push(child);
      }
      d[child] = max(d[child], d[now] + arr[child]);
    }
  }
  int answer = 0;
  for (int i = 1; i <= n; i++) {
    answer = max(answer, d[i]);
  }
  
  cout << answer;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n;
  for (int i = 1; i <= n; i++) {
    int t, numberOfChildren;
    cin >> t >> numberOfChildren;
    arr[i] = t;
    indegree[i] = numberOfChildren;

    for (int j = 0; j < numberOfChildren; j++) {
      int parent;
      cin >> parent;

      graph[parent].push_back(i);
    }
  }

  topologySort();
}