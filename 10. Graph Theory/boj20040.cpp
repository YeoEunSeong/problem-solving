// 문제 및 풀이: https://velog.io/@e7838752/BOJ20040
#include <iostream>

using namespace std;

int n, m;
int parent[500000];

int findParent(int x) {
  if (x == parent[x]) return x;
  else return parent[x] = findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);

  if (a < b) parent[b] = a;
  else parent[a] = b;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> n >> m;

  for (int i = 0; i < n; i++) {
    parent[i] = i;
  }
  
  int answer = 0;
  for (int i = 1; i <= m; i++) {
    int a, b;
    cin >> a >> b;

    if (answer == 0 && findParent(a) == findParent(b)) {
      answer = i;
    }
    unionParent(a, b);
  }
  cout<<answer;
}