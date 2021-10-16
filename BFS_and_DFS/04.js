function solution(nums) {
  let answer = "NO";
  let total = 0;
  let flag = false;
  for (const x of nums) {
    total += x;
  }

  function dfs(L, sum) {
    if (flag) return;
    if (sum > total / 2) return;
    if (L === nums.length) {
      if (sum === total / 2) {
        answer = "YES";
        flag = true;
      }
    } else {
      dfs(L + 1, sum + nums[L]);
      dfs(L + 1, sum);
    }
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
