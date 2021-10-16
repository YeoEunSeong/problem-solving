function solution(n, computers) {
  var answer = 0;
  let visited = Array(n).fill(false);

  function dfs(v) {
    visited[v] = true;
    for (let i = 0; i < n; i++) {
      if (computers[v][i] === 0) continue;
      if (visited[i]) continue;
      dfs(i);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }
  return answer;
}
