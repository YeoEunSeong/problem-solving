function solution(n, k, nums) {
  let answer = Infinity;
  let lt = 0;
  let cnt = 0;
  for (let rt = 0; rt < n; rt++) {
    cnt += nums[rt] === 1 ? 1 : 0;

    while (k <= cnt) {
      answer = Math.min(answer, rt - lt + 1);
      cnt -= nums[lt++] === 1 ? 1 : 0;
    }
  }
  answer = answer === Infinity ? -1 : answer;
  return answer;
}

console.log(solution(10, 3, [1, 2, 2, 2, 1, 2, 1, 2, 2, 1]));
