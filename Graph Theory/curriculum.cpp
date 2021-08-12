#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int v;
vector<int> graph[501];
int indegree[501] = {0, };
int times[501];

void topologySort() {
  vector<int> result;
  for (int i = 1; i <= v; i++) {
    result[i] = times[i];
  }
  
  queue<int> q;
  for (int i = 1; i <= v; i++) {
    if(indegree[i] == 0) q.push(i);
  }

  while(!q.empty()) {
    int now = q.front();
    q.pop();

    for (int i = 0; i < graph[now].size(); i++) {
      result[graph[now][i]] = max(result[graph[now][i]], result[now] + times[graph[now][i]]);
      indegree[graph[now][i]]--;
      if(indegree[graph[now][i]] == 0) q.push(graph[now][i]);
    }
  }

  for (int i = 0; i < result.size(); i++) {
    cout<<result[i]<<" ";
  }

}


int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>v;
  for (int i = 1; i <= v; i++) {
    int x;
    cin>>x;
    times[i] = x;
  
    while(true) {
      cin>>x;
      if (x==-1) break;
      indegree[i]++;
      graph[x].push_back(i);
    }
  }

  topologySort();
}