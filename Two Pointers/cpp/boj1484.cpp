// 문제 및 풀이: https://velog.io/@e7838752/BOJ2230
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int g;

vector<pair<int, int> > getDivisor(int n) {
  vector<pair<int, int> > v;
  for (int i = 1; i*i < n; i++) {
    if (n % i == 0) {
      v.push_back(make_pair(n / i, i));
    }
  }
  return v;
}

int main() {
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  cin >> g;
  vector<pair<int, int> > v = getDivisor(g);
  vector<int> answer;

  for (int i = 0; i < v.size(); i++) {
    int sum = v[i].first + v[i].second;
    if (sum % 2 == 0) {
      answer.push_back(sum / 2);
    }
  }
  sort(answer.begin(), answer.end());
  
  if (answer.size() == 0) cout<< -1;
  for (int i = 0; i < answer.size(); i++) {
    cout<<answer[i]<<endl;
  }
}