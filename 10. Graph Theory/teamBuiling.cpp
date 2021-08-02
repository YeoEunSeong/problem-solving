// 문제와 풀이 블로그 https://velog.io/@e7838752/teamBuilding
#include <iostream>

using namespace std;

int v, e;
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

  cin>>v>>e;

  for (int i = 0; i <= v; i++) {
    parent[i] = i;
  }
  
  for (int i = 0; i < e; i++) {
    int op, a, b;
    cin>>op>>a>>b;

    if(op == 0) { 
      unionParent(a, b);
    }
    else {
      if(findParent(a) == findParent(b)) cout<<"YES";
      else cout<<"NO";
    }
  }
}