function solution(n, m) {
  let answer = [];
  let tmp = [];
  let visited = Array(n + 1).fill(0);

  function dfs(L, s) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp.push(i);
        dfs(L + 1, i + 1);
        tmp.pop();
      }
    }
  }
  dfs(0, 1);
  return answer;
}

console.log(solution(4, 2));
