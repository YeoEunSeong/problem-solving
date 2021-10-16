function solution(n) {
  let answer = 0;

  function dfs(n) {
    if (n <= 0) return;
    dfs(parseInt(n / 2));
    answer *= 10;
    answer += n % 2;
  }
  dfs(n);
  return answer;
}

console.log(solution(11)); // 1011
