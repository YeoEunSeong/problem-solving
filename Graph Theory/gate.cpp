// 문제 및 풀이: https://velog.io/@e7838752/gate
#include <iostream>
#include <vector>

using namespace std;

int n, m;
int parent[100001];

int findParent(int x) {
  if(parent[x] == x) return x;
  else return findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);

  if(a < b) parent[b] = a;
  else parent[a] = b;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n>>m;

  for (int i = 0; i <= n; i++) {
    parent[i] = i;
  }

  vector<int> v;
  for (int i = 0; i < m; i++) {
    int x;
    cin>>x;
    v.push_back(x);
  }

  int answer= 0;
  for (int i = 0; i < m; i++) {
    int root = findParent(v[i]);
    if (root == 0) break;
    else {
      unionParent(root, root-1);
      answer++;
    }
  }
  
  cout<<answer;
}