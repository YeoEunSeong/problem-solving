#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int v, e;
vector<int> graph[100001];
int indegree[100001] = {0, };

void topologySort() {
  vector<int> result;
  queue<int> q;

  for (int i = 1; i < v; i++) {
    if(indegree[i] == 0) q.push(i);
  }

  while(!q.empty()) {
    int now = q.front();
    result.push_back(now);
    q.pop();

    for (int i = 0; i < graph[now].size(); i++) {
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

  cin>>v>>e;
  for (int i = 0; i < e; i++) {
    int a, b;
    cin>>a>>b;

    graph[a].push_back(b);
    indegree[b]++;
  }

  topologySort();
}