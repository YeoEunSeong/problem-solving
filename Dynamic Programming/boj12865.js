function solutoin(nums, n, k) {
  let answer;

  let dy = Array(n).fill(0);

  for (const [v, w] of nums) {
    for (let i = n - 1; i >= w; i--) {
      dy[i] = Math.max(dy[i], dy[i - w] + v);
    }
  }

  console.log(dy);

  return answer;
}

console.log(
  solutoin(
    [
      [6, 13],
      [4, 8],
      [3, 6],
      [5, 12],
    ],
    4,
    7
  )
);
