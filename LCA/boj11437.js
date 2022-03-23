const solution = (n, edges, m, pairs) => {
  const answer = [];
  const graph = Array.from(Array(n + 1), () => new Array());
  const parents = Array(n + 1);
  const visited = Array(n + 1).fill(false);
  const depths = Array(n + 1);

  for (const [from, to] of edges) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (curr, depth) => {
    visited[curr] = true;
    depths[curr] = depth;

    for (const next of graph[curr]) {
      if (!visited[next]) {
        parents[next] = curr;
        dfs(next, depth + 1);
      }
    }
  };

  dfs(1, 0);

  const lca = (a, b) => {
    while (depths[a] !== depths[b]) {
      if (depths[a] > depths[b]) {
        a = parents[a];
      } else {
        b = parents[b];
      }
    }

    while (a !== b) {
      a = parents[a];
      b = parents[b];
    }
    return a;
  };

  for (const [a, b] of pairs) {
    answer.push(lca(a, b));
  }
  return answer;
};

console.log(
  solution(
    15,
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [3, 7],
      [6, 2],
      [3, 8],
      [4, 9],
      [2, 5],
      [5, 11],
      [7, 13],
      [10, 4],
      [11, 15],
      [12, 5],
      [14, 7],
    ],
    6,
    [
      [6, 11],
      [10, 9],
      [2, 6],
      [7, 6],
      [8, 13],
      [8, 15],
    ]
  ).join('\n')
);
