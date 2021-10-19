function solution(n, edges, s, e) {
  let answer = 0;
  let start = 0;
  let end = 1000000000;
  let graph = Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    graph[i] = Array();
  }

  for (const [x, y, w] of edges) {
    graph[x].push([y, w]);
    graph[y].push([x, w]);
  }

  function bfs(weight) {
    let visited = Array(n + 1).fill(0);
    let q = [];
    q.push(s);
    visited[s] = 1;

    while (q.length) {
      let x = q.shift();
      if (x === e) return true;

      for (const [next, w] of graph[x]) {
        if (visited[next]) continue;
        if (w < weight) continue;
        visited[next] = 1;

        q.push(next);
      }
    }
    return false;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (bfs(mid)) {
      answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return answer;
}

console.log(
  solution(
    5,
    [
      [1, 2, 5],
      [1, 3, 3],
      [1, 4, 2],
      [2, 4, 2],
      [3, 4, 4],
      [4, 5, 3],
    ],
    1,
    5
  )
);
