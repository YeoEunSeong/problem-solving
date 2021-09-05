`이것이 취업을 위한 코딩테스트다 WITH 파이썬`

## 10장. 그래프 이론 
- 코딩테스트에서 자주 보이는 기타 그래프 이론 공부하기

### disjointSet.cpp
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

### cycle.cpp
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
### spanningTree.cpp
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
    cin >> a >> b >> cost;
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



### teamBuilding.cpp
- 책 팀 결성 예제 문제
- 문제 및 풀이: https://velog.io/@e7838752/teamBuilding

### cityDivision.cpp
- 책 도시 분할 계획 예제 문제 && 백준 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1647

### boj1197.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1197

### boj1922.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1922

### cirriculum.cpp
- 책 커리큘럼 예제

### connectIsland.cpp
- 프로그래머스 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/programmers-connectIsland

### boj4386.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ4386

### tripPlan.cpp
- 책 유제 문제
- 문제 및 풀이: https://velog.io/@e7838752/tripPaln

### gate.cpp
- 책 유제 문제
- 문제 및 풀이: https://velog.io/@e7838752/gate

### darkRoad.cpp
- 책 유제 문제
- 크루스칼 알고리즘, 최소 신장 트리
- 문제 및 풀이: https://velog.io/@e7838752/darkRoad

### boj2887.cpp
- 책 유제 문제 && 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ2887

### boj1717.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1717
- 17번째 백준 1717번 문제 🤔

### boj16398.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ16398

### boj1976.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ1976

### boj16562.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ16562

### boj20040.cpp
- 백준 분리 집합 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ20040

### roomAssignment.cpp
- 프로그래머스 방 배정 문제
- 문제 및 풀이: https://velog.io/@e7838752/programmers-roomAssignment\

### boj6497.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ6497

### boj14621.cpp
- 백준 최소 신장 트리 문제
- 문제 및 풀이: https://velog.io/@e7838752/B

### boj1707.cpp
- 백준 이분 그래프 문제
- 문제 및 풀이: https://velog.io/@e7838752/boj1707