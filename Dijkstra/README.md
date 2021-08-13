`이것이 취업을 위한 코딩테스트다 WITH 파이썬`

## 9장 최단 경로 中 다익스트라 알고리즘

### 📝 다익스트라 알고리즘
- **음의 간선이 없는** 그래프에서 다른 노드로 가는 최단 경로를 구하는 알고리즘
- 매순간 가장 비용이 적게 드는 과정을 반복하는 `그리디(greedy)` 알고리즘의 일종

### 🖊️ 다익스트라 알고리즘 원리
1. 출발 노드 설정
2. 최단 거리 테이블 초기화
3. 방문하지 않은 노드 중에서 최단 거리가 가장 짧은 노드를 선택
4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여 최단 거리 테이블을 갱신
5. 3, 4번 과정을 반복

### 💻 간단한 다익스트라 코드 
`간단한인 이유: 이해하기 쉽지만 시간복잡도를 개선할 수 있는 코드가 존재`

- [basicDijkstar.cpp](https://github.com/YeoEunSeong/problem-solving/blob/master/Dijkstra/basicDijkstra.cpp)
- `최단 거리가 가장 짧은 노드`를 찾기 위해 선형 탐색
- 시간 복잡도: O(v²)

### 👍 개선된 다익스트라 코드
- [ImprovedDijkstar.cpp](https://github.com/YeoEunSeong/problem-solving/blob/master/Dijkstra/improvedDijkstra.cpp)
- `최단 거리가 가장 짧은 노드`를 찾기 위해 힙 자료구조 사용
- 시간 복잡도: O(E㏒V)

### telegram.cpp
- 다익스트라 기본 예제