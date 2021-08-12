## 위상 정렬

### 위상 정렬
- 순서가 있는 작업들을 순서에 위반되지 않게 정렬하는 알고리즘
- 차수가 0인 노드들을 큐에 삽입한다.
- 큐를 하나씩 꺼내면서 해당 큐에 연결된 노드들의 차수를 감소시킨다.
- 감소된 노드의 차수가 0이면 큐에 삽입한다.

### 위상 정렬 예제 코드 - topology.cpp
```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int v, e;
vector<int> graph[100001];
int indegree[100001] = {0, };

void topologySort() {
  vector<int> result;
  queue<int> q;

  for (int i = 1; i <= v; i++) {
    if(indegree[i] == 0) q.push(i);
  }

  while(!q.empty()) {
    int now = q.front();
    result.push_back(now);
    q.pop();

    for (int i = 0; i < graph[now].size(); i++) {
      indegree[graph[now][i]]--;
      if(indegree[graph[now][i]] == 0) q.push(graph[now][i]);
    }
  }

  for (int i = 0; i < result.size(); i++) {
    cout<<result[i]<<" ";
  }
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>v>>e;
  for (int i = 0; i < e; i++) {
    int a, b;
    cin>>a>>b;

    graph[a].push_back(b);
    indegree[b]++;
  }

  topologySort();
}
```
### boj1516.cpp
- 백준 위상 정렬 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1516

### boj2056.cpp
- 백준 위상 정렬 문제
- 문제 및 풀이: https://velog.io/@e7838752/boj2056