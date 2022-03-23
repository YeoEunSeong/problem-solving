const solution = cookie => {
  let answer = 0;
  const n = cookie.length;
  for (let i = 0; i < n; i++) {
    let left = i;
    let right = i + 1;
    let leftSum = cookie[left];
    let rightSum = cookie[right];

    while (0 <= left && right < n) {
      answer = leftSum === rightSum ? Math.max(answer, leftSum) : answer;

      if (leftSum === rightSum) {
        answer = Math.max(answer, leftSum);
        left -= 1;
        right += 1;
        if (left < 0 || right >= n) break;
        leftSum += cookie[left];
        rightSum += cookie[right];
      } else if (leftSum < rightSum) {
        left -= 1;
        if (left < 0) break;
        leftSum += cookie[left];
      } else {
        right += 1;
        if (right >= n) break;
        rightSum += cookie[right];
      }
    }
  }

  return answer;
};

console.log(solution([1, 1, 2, 3]));
console.log(solution([1, 2, 4, 5]));
console.log(solution([1, 1]));
