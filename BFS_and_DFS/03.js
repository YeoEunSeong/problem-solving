function solution(n) {
  let answer = [];
  let tmp = [];

  function dfs(v) {
    if (n < v) {
      if (tmp.length) answer.push(tmp.slice());
    } else {
      tmp.push(v);
      dfs(v + 1);

      tmp.pop();
      dfs(v + 1);
    }
  }
  dfs(1);
  return answer;
}

console.log(solution(3));
