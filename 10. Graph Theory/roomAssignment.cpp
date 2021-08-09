문제 및 풀이: https://velog.io/@e7838752/programmers-roomAssignment
#include <string>
#include <vector>
#include <map>

using namespace std;

long long findParent(map<long long, long long> &m, long long x) {
    if (!m[x]) return x;
    else return m[x] = findParent(m, m[x]);
}

void unionParent(map<long long, long long> &m, long long a, long long b) {
    a = findParent(m, a);
    b = findParent(m, b);
    
    m[a] = b;
}

vector<long long> solution(long long k, vector<long long> room_number) {
    vector<long long> answer;
    map<long long, long long> m;
    
    for (long long room : room_number) {
        if (m[room]) {
            room = findParent(m, room);
        }
        
        answer.push_back(room);
        unionParent(m, room, room + 1);
    }
    return answer;
}