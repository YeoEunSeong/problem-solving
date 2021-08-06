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
