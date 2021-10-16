function solution(nums, m) {
  let answer = [];
  let tmp = [];
  let n = nums.length;
  let visited = Array(n).fill(0);

  function dfs(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        tmp.push(nums[i]);
        visited[i] = 1;
        dfs(L + 1);
        tmp.pop();
        visited[i] = 0;
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution([3, 6, 9], 2));
