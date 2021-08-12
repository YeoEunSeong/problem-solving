// 문제 및 풀이: https://velog.io/@e7838752/BOJ2110
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> houses;

int main() {
	int n, c;
	cin >> n >> c;

	for (int i = 0; i < n; i++) {
		int house;
		cin >> house;
		houses.push_back(house);
	}

	sort(houses.begin(), houses.end());

	int start = houses[1] - houses[0];
  int end = houses[n - 1] - houses[0];
  int result = 0;

	while (start <= end) {
		int mid = (end + start) / 2;
    int cnt = 1;
		int value = houses[0];

		for (int i = 0; i < n; i++) {
			if (value + mid <= houses[i]) {
				value = houses[i];
				cnt++;
			}
		}

		if (cnt >= c) {
			result = mid;
			start = mid + 1;
		}
		else end = mid - 1;
	}

	cout << result << endl;

}
