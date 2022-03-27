const solution = (land, P, Q) => {
  let answer = Infinity;
  const arr = land.flat();
  const total = arr.reduce((prev, curr) => prev + curr, 0);
  const len = arr.length;

  let prev = 0;
  let height = -1;
  for (let i = 0; i < len; i++) {
    if (height !== arr[i]) {
      height = arr[i];

      const toBeAdded = arr[i] * i - prev;
      const toBeRemoved = total - (prev + (len - i) * arr[i]);
      const cost = toBeAdded * P + toBeRemoved * Q;

      answer = Math.min(answer, cost);
    }
    prev += arr[i];
  }
  return answer;
};

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    3,
    2
  )
);
