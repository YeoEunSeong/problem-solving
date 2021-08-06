`이것이 취업을 위한 코딩테스트다 WITH 파이썬`

## 7장. 이진 탐색
### 이진 탐색
- **정렬된 배열**에서 원하는 데이터를 찾는 탐색
- 시작점과 끝점을 이용하여 중간점과 원하는 데이터를 비교하여 중간점을 갱신하여 값을 찾는 탐색 방법
- 시작점이 끝점을 넘어서면 원하는 데이터가 없음을 의미
- 원하는 값이 중간 값보다 작다면 끝점을 중간점보다 1 작은 값으로 갱신
- 원하는 값이 중간 값보다 크다면 시작점을 중간점보다 1 큰 값으로 갱신

### 시간 복잡도
- 절반씩 줄이면서 찾기 때문에 O(logN)
  
||시간복잡도|
|------|---|
|순차 탐색|O(N)|
|이진 탐색|O(logN)|


### 1. binarySearchRecursion.cpp
- 재귀로 구현한 이진 탐색 기본 예제
```cpp
#include <iostream>
#include <vector>

using namespace std;

int n, target;
vector<int> arr;

int binarySearch(vector<int> &arr, int target, int start, int end) {
  if (start > end) return -1;
  int mid = (start + end) / 2;

  if (arr[mid] == target) return mid;
  else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  else return binarySearch(arr, target, start, mid - 1);
}

int main(void) {
  cin >> n >> target;

  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  int result = binarySearch(arr, target, 0, n - 1);
  if (result == -1) {
    cout << "원소가 존재하지 않습니다." << '\n';
  }
  else {
    cout << result + 1 << '\n';
  }
}
```
### 2. binarySearchLoop.cpp
- 반복문으로 구현한 이진 탐색 기본 예제

```cpp

#include <iostream>
#include <vector>

using namespace std;

int n, target;
vector<int> arr;

int binarySearch(vector<int> &arr, int target, int start, int end) {
  while (start <= end) {
    int mid = (start + end) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

int main(void) {
  cin >> n >> target;

  for (int i = 0; i < n; i++) {
    int x;
    cin >> x;
    arr.push_back(x);
  }

  int result = binarySearch(arr, target, 0, n - 1);
  if (result == -1) {
    cout << "원소가 존재하지 않습니다." << '\n';
  }
  else {
    cout << result + 1 << '\n';
  }
}
```

### 3. findParts.cpp
- 이진 탐색 기본 예제
- 책 예제 부품 찾기
- 존재 여부만 검사하기 때문에 다양한 방법(계수 정렬, 집합...) 이용 가능

### 4. ricecake.cpp
- 이진 탐색 기본 예제, 파라메트릭 서치(Parametric Search) 문제
- 책 예제 떡볶이 떡 만들기

### 5. fixedPoint.cpp
- 이진 탐색 유제
- 책 유제 고정점 찾기
- 문제 및 풀이: https://velog.io/@e7838752/15-2

### 6.router.cpp
- 책 유제 및 백준 이진 탐색 문제
- 문제 및 풀이: https://velog.io/@e7838752/BOJ2110