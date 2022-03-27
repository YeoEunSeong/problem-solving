const solution = (n, m, arr) => {
  const answer = [];
  const graph = Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    graph[i] = [];
  }

  const indegrees = Array(n + 1).fill(0);

  for (const [small, tall] of arr) {
    graph[small].push(tall);
    indegrees[tall] += 1;
  }

  const visited = Array(n + 1).fill(false);

  const q = [];

  for (let i = 1; i < n + 1; i++) {
    if (indegrees[i] === 0) {
      visited[i] = true;
      q.push(i);
    }
  }

  while (q.length) {
    const curr = q.shift();
    answer.push(curr);

    for (const next of graph[curr]) {
      indegrees[next] -= 1;
    }

    for (let i = 1; i < n + 1; i++) {
      if (!visited[i] && indegrees[i] === 0) {
        q.push(i);
        visited[i] = true;
      }
    }
  }
  return answer.join(' ');
};

console.log(
  solution(3, 2, [
    [1, 3],
    [2, 3],
  ])
);
