function solution(n, r) {
  let answer;
  let arr = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    arr[i] = Array(i + 1).fill(0);
  }

  function dfs(n, r) {
    if (r === 0 || n === r) return 1;
    if (arr[n][r] !== 0) return arr[n][r];
    else {
      return (arr[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
    }
  }

  answer = dfs(n, r);
  return answer;
}

console.log(solution(5, 3));
console.log(solution(33, 19));
