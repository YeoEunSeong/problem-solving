// 문제 및 풀이: https://velog.io/@e7838752/BOJ4386
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int n;
int parent[101];
vector<pair<double, double> > point;
vector<pair<double, pair<int, int> > > graph;

double getDistance(int x1, int y1, int x2, int y2) {
  return sqrt((x1-x2) * (x1-x2) + (y1-y2) * (y1-y2));
}

int findParent(int x) {
  if(x == parent[x]) return x;
  else return findParent(parent[x]);
}

void unionParent(int a, int b) {
  a = findParent(a);
  b = findParent(b);

  if(a < b) parent[b] = a;
  else  parent[a] = b;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n;

  for (int i = 0; i < n; i++){
    double x, y;
    cin>>x>>y;
    point.push_back(make_pair(x, y));
  }

  for (int i = 0; i < n; i++){
    parent[i] = i;
  }
  
  
  for (int i = 0; i < n; i++) {
    for (int j = i+1; j < n; j++) {
      graph.push_back(make_pair(getDistance(point[i].first, point[i].second, point[j].first, point[j].second), make_pair(i, j)));
    }
  }

  sort(graph.begin(), graph.end());

  double answer = 0;
  for (int i = 0; i < graph.size(); i++) {
    int a, b;
    double distance;
    distance = graph[i].first;
    a = graph[i].second.first;
    b = graph[i].second.second;

    if(findParent(a) != findParent(b)) {
      answer += distance;
      unionParent(a, b);
    }
  }
  
  cout<<answer;
}