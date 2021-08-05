// 문제 및 풀이: https://velog.io/@e7838752/BOJ1976
#include <iostream>
#include <vector>

using namespace std;

int n, m;
int parent[201];

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
  for (int i = 0; i <= n; i++) {
    parent[i] = i;
  }
  

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      int x;
      cin >> x;
      if (x == 1) {
        unionParent(i + 1, j + 1);
      }
    }
  }

  vector<int> v;
  for (int i = 0; i < m; i++) {
    int x;
    cin >> x;
    v.push_back(x);
  }

  bool answer = true;
  for (int i = 0; i < m - 1; i++) {
    if (findParent(v[i]) != findParent(v[i + 1])) {
      answer = false;
      break;
    }
  }

  if(answer) cout<<"YES";
  else cout<<"NO";
}