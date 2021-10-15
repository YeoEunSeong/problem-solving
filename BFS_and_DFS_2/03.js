function solution(n, edges) {
  let answer = 0;
  let graph = Array(n + 1);
  for (let i = 1; i <= n; i++) {
    graph[i] = Array();
  }

  let visited = Array(n + 1).fill(false);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(v) {
    for (let i = 0; i < graph[v].length; i++) {
      let next = graph[v][i];
      if (visited[next]) continue;
      visited[next] = true;
      dfs(next);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(i);
    answer++;
  }
  return answer;
}

console.log(
  solution(7, [
    [1, 2],
    [2, 3],
    [1, 4],
    [1, 5],
  ])
);
