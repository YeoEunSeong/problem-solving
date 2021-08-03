// 문제 및 풀이: https://velog.io/@e7838752/BOJ1516
#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

int n;
vector<int> graph[501];
int indegree[501];
int times[501];

void topologySort() {
  vector<int> result(n+1);
  for (int i = 1; i <= n; i++){
    result[i] = times[i];
  }

  queue<int> q;
  for (int i = 1; i <= n; i++){
    if (indegree[i] == 0) q.push(i);
  }

  while (!q.empty()){
    int now = q.front();
    q.pop();

    for (int i = 0; i < graph[now].size(); i++){
      int connected = graph[now][i];
      result[connected] = max(result[connected], result[now] + times[connected]); 
      indegree[connected]--;
      if(indegree[connected] == 0) q.push(connected);
    }
  }

  for (int i = 1; i <= n; i++){
    cout<<result[i]<<endl;
  }
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin>>n;
  for (int i = 1; i <= n; i++){
    int x;
    cin>>x;
    times[i] = x;

    while (true) {
      cin>>x;
      if (x==-1) break;
      indegree[i]++;
      graph[x].push_back(i);
    }
  }
  
  topologySort();
}