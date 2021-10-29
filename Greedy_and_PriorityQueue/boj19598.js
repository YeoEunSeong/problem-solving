function solution(n, nums) {
  let answer = 0;
  let arr = Array(n).fill(0);

  nums.sort((a, b) => a[0] - b[0]);

  for (const [s, e] of nums) {
    for (let i = 0; i < n; i++) {
      if (arr[i] <= s) {
        arr[i] = e;
        break;
      }
    }
  }

  for (const x of arr) {
    if (x === 0) break;
    answer++;
  }
  return answer;
}

console.log(
  solution(3, [
    [0, 40],
    [15, 30],
    [5, 10],
  ])
);
console.log(
  solution(2, [
    [10, 20],
    [5, 10],
  ])
);
