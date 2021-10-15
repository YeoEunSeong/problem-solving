function solution(nums, c) {
  let answer = 0;
  function dfs(v, sum) {
    if (sum > c) return;
    if (v >= nums.length) {
      answer = Math.max(answer, sum);
    } else {
      dfs(v + 1, sum + nums[v]);
      dfs(v + 1, sum);
    }
  }

  dfs(0, 0);
  return answer;
}

console.log(solution([81, 58, 42, 33, 61], 259));
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));
