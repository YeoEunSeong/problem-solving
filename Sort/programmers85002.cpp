// 문제 및 풀이: https://velog.io/@e7838752/programmers85002
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

class Boxer {
    public:
    int index;   
    double winRate;
    int weight;
    int win2heavierBoxer;
    Boxer(int index, double winRate, int weight, int win2heavierBoxer) {
        this->index = index;
        this->winRate = winRate;
        this->weight = weight;
        this->win2heavierBoxer = win2heavierBoxer;
    }
};

bool compare(Boxer &a, Boxer &b) {
    if (a.winRate == b.winRate) {
        if (a.win2heavierBoxer == b.win2heavierBoxer) {
            if (a.weight == b.weight) {
                return a.index < b.index;
            }
            return a.weight > b.weight;
        }
        return a.win2heavierBoxer > b.win2heavierBoxer;
    }
    return a.winRate > b.winRate;
}

vector<int> solution(vector<int> weights, vector<string> head2head) {
    vector<int> answer;
    vector<Boxer> arr;

    for (int i = 0 ; i < head2head.size(); ++i) {
        int numberOfFight = 0;
        int numberOfWin = 0;
        int numberOfwin2heavierBoxer = 0;
        for (int j = 0; j < head2head[i].size(); ++j) {
            if (head2head[i][j] == 'N') continue;
            
            numberOfFight++;
            if (head2head[i][j] == 'W') {
                numberOfWin++;
                if (weights[i] < weights[j]) {
                    numberOfwin2heavierBoxer++;
                }
            }
        }
        double winRate = numberOfFight == 0 ? 0 : double(numberOfWin) / double(numberOfFight);
        arr.push_back(Boxer(i + 1, winRate, weights[i], numberOfwin2heavierBoxer));
    }
    
    sort(arr.begin(), arr.end(), compare);
    for (int i = 0; i < arr.size(); ++i) {
        answer.push_back(arr[i].index);
    }
    
    return answer;
}