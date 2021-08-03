// 문제와 풀이 블로그 https://velog.io/@e7838752/programmers-connectIsland
#include <vector>
#include <algorithm>

using namespace std;

int parent[100];

int findParent(int x) {
    if(x == parent[x]) return x;
    else return findParent(parent[x]);
}

void unionParent(int a, int b) {
    a = findParent(a);
    b = findParent(b);
    
    if(a < b) parent[b] = a;
    else parent[a] = b;
}

bool compare(vector<int> &a, vector<int> &b) {
    return a[2] < b[2]; 
}

int solution(int n, vector<vector<int>> costs) {
    int answer = 0;
    
    for(int i=0; i<n; ++i) {
        parent[i] = i;
    }
    
    sort(costs.begin(), costs.end(), compare);
    
    for(int i=0; i<costs.size(); ++i) {
        int a = costs[i][0];
        int b = costs[i][1];
        int cost = costs[i][2];
        
        if(findParent(a) != findParent(b)) {
            answer += cost;
            unionParent(a, b);
        }
    }
    
    return answer;
}