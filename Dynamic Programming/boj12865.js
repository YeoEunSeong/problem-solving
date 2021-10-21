function solution(nums, k) {
  let dy = Array(k + 1).fill(0);

  for (const [w, v] of nums) {
    for (let i = k; i >= w; i--) {
      dy[i] = Math.max(dy[i], dy[i - w] + v);
    }
  }
  return dy[k];
}
console.log(
  solution(
    [
      [4, 7],
      [6, 13],
      [4, 8],
      [3, 6],
      [5, 12],
    ],
    7
  )
);
