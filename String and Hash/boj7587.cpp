#include <iostream>
#include <algorithm>
#include <map>

using namespace std;

bool isAnagram(map<char, int> hs, string word)
{
  for (int i = 0; i < word.size(); i++)
  {
    if (hs.find(word[i]) == hs.end())
      return false;
    hs[word[i]] -= 1;
    if (hs[word[i]] == 0)
      hs.erase(word[i]);
  }
  return true;
}

int main()
{
  cin.tie(NULL);
  ios_base::sync_with_stdio(false);

  int n;
  cin >> n;
  string words[1000];
  while (n != 0)
  {
    string answerStr;
    int answerInt = 0;
    for (int i = 0; i < n; i++)
      cin >> words[i];

    for (int i = 0; i < n; i++)
    {
      int count = 0;
      map<char, int> hs;
      for (int j = 0; j < words[i].size(); j++)
        hs[words[i][j]] += 1;

      for (int j = i + 1; j < n; j++)
        count += isAnagram(hs, words[j]) ? 1 : 0;

      if (answerInt < count)
      {
        answerStr = words[i];
        answerInt = count;
      }
    }

    cout << answerStr << " " << answerInt << endl;
    cin >> n;
  }
}