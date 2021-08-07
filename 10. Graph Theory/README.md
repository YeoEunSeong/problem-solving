`이것이 취업을 위한 코딩테스트다 WITH 파이썬`

## 10장. 그래프 이론 
- 코딩테스트에서 자주 보이는 기타 그래프 이론 공부하기

### 1. disjointSet.cpp
- 서로소 집합 기본 예제
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
int parent[1000001];

int findParent(int x) {
  if(parent[x] == x) return x;
  else return parent[x] = findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);
  
  if(a < b) parent[b] = a;
  else parent[a] = b;
}

int main(){
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n>>m;

  for (int i = 1; i <= n; i++) {
    parent[i] = i;
  }
  
  for (int i = 0; i < m; i++) {
    int a, b;
    cin>>a>>b;
    unionParent(a, b);
  }
  
  cout<<"각 원소가 속한 집합: ";
  for (int i = 1; i <= n; i++) {
    cout<<findParent(i)<<" ";
  }
  
  cout<<"\n부모 테이블: ";
  for (int i = 1; i < n; i++) {
    cout<<parent[i]<<" ";
  }
}
```

### 2. cycle.cpp
- 서로소 집합에서 사이클이 발생하는지 확인하는 예제
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
int parent[1000001];

int findParent(int x) {
  if(parent[x] == x) return x;
  else return parent[x] = findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);
  
  if(a < b) parent[b] = a;
  else parent[a] = b;
}

int main(){
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n>>m;

  for (int i = 1; i <= n; i++) {
    parent[i] = i;
  }
  
  bool cycle = false;
  for (int i = 0; i < m; i++) {
    int a, b;
    cin>>a>>b;
    
    if (findParent(a) == findParent(b)) {
      cycle = true;
      break;
    }
    else {
      unionParent(a, b);
    }
  }
  
  if (cycle) cout<<"Cycled";
  else cout<<"Uncycled";
  
}

```
### 3. spanningTree.cpp
- Kruskal 알고리즘을 이용한 신장트리 예제
- 1과 2가 3에서 쓰인다.
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int v, e;
int parent[100001];
vector<pair<int, pair<int, int> > > edges;

int findParent(int x) {
  if(parent[x] == x) return x;
  else return findParent(parent[x]);
}

void unoinParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);

  if(a < b) parent[b] = a;
  else parent[a] = b;
}

int main(){
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>v>>e;

  for (int i = 1; i <= v; i++) {
    parent[i] = i;
  }

  for (int i = 0; i < e; i++) {
    int a, b, cost;
    cin>>a>>b>>cost;
    edges.push_back( {cost, {a, b}} );
  }
  
  sort(edges.begin(), edges.end());
  int totalCost = 0;
  for (int i = 0; i < edges.size(); i++) {
    int cost = edges[i].first;
    int a = edges[i].second.first;
    int b = edges[i].second.second;

    if(findParent(a) != findParent(b)) {
      unoinParent(a, b);
      totalCost += cost;
    }
  }
    
  cout<<totalCost;
}

```

### 4. topology.cpp
- 위상 정렬 예제
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

### 5. teamBuilding.cpp
- 책 팀 결성 예제 문제
- 문제 및 풀이: https://velog.io/@e7838752/teamBuilding

### 6. cityDivision.cpp
- 책 도시 분할 계획 예제 문제 && 백준 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1647

### 7. boj1197.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1197

### 8. boj1922.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1922

### 9. cirriculum.cpp
- 책 커리큘럼 예제

### 10. connectIsland.cpp
- 프로그래머스 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/programmers-connectIsland

### 11. boj1516.cpp
- 백준 위상 정렬 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1516

### 12. boj4386.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ4386

### 13. tripPlan.cpp
- 책 유제 문제
- 문제 및 풀이: https://velog.io/@e7838752/tripPaln

### 14. gate.cpp
- 책 유제 문제
- 문제 및 풀이: https://velog.io/@e7838752/gate

### 15. darkRoad.cpp
- 책 유제 문제
- 크루스칼 알고리즘, 최소 신장 트리
- 문제 및 풀이: https://velog.io/@e7838752/darkRoad

### 16. boj2887.cpp
- 책 유제 문제 && 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ2887

### 17. boj1717.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1717
- 17번째 백준 1717번 문제 🤔

### 18. boj16398.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ16398

### 19. boj1976.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1976

### 20. boj16562.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ16562

### 21. boj20040.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ20040