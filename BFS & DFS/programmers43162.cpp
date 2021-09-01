// 문제 및 풀이: https://velog.io/@e7838752/programmers43162
#include <string>
#include <vector>
#include <set>

using namespace std;

int findParent(int x, int parent[]) {
    if (x == parent[x]) return x;
    else return parent[x] = findParent(parent[x], parent);
}

void unionParent(int a, int b, int parent[]) {
    a = findParent(a, parent);
    b = findParent(b, parent);
    
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

int solution(int n, vector<vector<int>> computers) {
    int parent[200];
    for (int i = 0; i < n; ++i) {
        parent[i] = i;
    }
    
    for (int i = 0; i < computers.size(); ++i) {
        for (int j = 0; j < i; ++j) {
            if (computers[i][j] == 1) unionParent(i, j, parent);
        }
    }
    
    set<int> s;
    for (int i = 0; i < n; ++i) {
        s.insert(findParent(i, parent));
    }
    return s.size();
}