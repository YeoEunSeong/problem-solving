function solution(nums, k) {
  let answer = [];
  let freq = new Map();

  for (const x of nums) {
    freq.set(x, (freq.get(x) || 0) + 1);
  }

  let temp = [...freq].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    answer.push(temp[i][0]);
  }

  return answer;
}

console.log(solution([1, 1, 1, 2, 2, 3], 2));
console.log(solution([3, 3, 3, 5, 1, 1, 1, 7, 2, 2], 3));
console.log(solution([1, 2, 2, 3, 3, 3], 2));