// 문제 및 풀이: https://velog.io/@e7838752/BOJ2887

#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int n;
int parent[1000001];
vector<pair<int, pair<int, int> > > edges;

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


int main(){
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n;

  for (int i = 0; i < n; i++) {
    parent[i] = i;
  }
  
  vector<pair<int, int> > x;
  vector<pair<int, int> > y;
  vector<pair<int, int> > z;

  for (int i = 0; i < n; i++) {
    int a, b, c;
    cin>>a>>b>>c;

    x.push_back(make_pair(a, i));
    y.push_back(make_pair(b, i));
    z.push_back(make_pair(c, i));
  }

  sort(x.begin(), x.end());
  sort(y.begin(), y.end());
  sort(z.begin(), z.end());

  for (int i = 0; i < n - 1; i++) {
    edges.push_back(make_pair(x[i+1].first - x[i].first, make_pair(x[i].second, x[i+1].second)));
    edges.push_back(make_pair(y[i+1].first - y[i].first, make_pair(y[i].second, y[i+1].second)));
    edges.push_back(make_pair(z[i+1].first - z[i].first, make_pair(z[i].second, z[i+1].second)));
  }

  sort(edges.begin(), edges.end());
  
  int answer = 0;
  for (int i = 0; i < edges.size(); i++) {
    int a, b, cost;
    cost = edges[i].first;
    a = edges[i].second.first;
    b = edges[i].second.second;

    if(findParent(a) != findParent(b)) {
      answer += cost;
      unionParent(a, b);
    }
  }

  cout<<answer;
}
