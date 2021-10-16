function solution(n, f) {
  let answer = [];
  let tmp = [];
  let visited = Array(n + 1).fill(0);
  let arr = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    arr[i] = Array(i + 1).fill(0);
  }
  let flag = false;

  function combination(n, r) {
    if (r === 0 || n === r) return 1;
    if (arr[n][r] !== 0) return arr[n][r];
    else {
      return (arr[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
    }
  }

  function dfs(L) {
    if (flag) return;
    if (L === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += tmp[i] * combination(n - 1, i);
      }
      if (sum === f) {
        flag = true;
        answer = tmp.slice();
      }
    } else {
      for (let i = 1; i <= n; i++) {
        if (visited[i]) continue;
        visited[i] = 1;
        tmp.push(i);
        dfs(L + 1);
        visited[i] = 0;
        tmp.pop();
      }
    }
  }
  dfs(0);
  return answer;
}

console.log(solution(4, 16));
console.log(solution(5, 50));
