function solution(n, nums) {
  let answer = 0;
  let dy = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dy[i] = Math.max(dy[i], dy[j] + 1);
      }
    }
  }

  answer = Math.max(...dy);
  return answer;
}
