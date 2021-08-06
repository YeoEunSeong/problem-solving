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
