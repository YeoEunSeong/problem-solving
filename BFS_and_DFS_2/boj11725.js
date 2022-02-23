const solution = (n, edges) => {
  const parents = Array(n + 1);
  for (let i = 1; i <= n; i++) {
    parents[i] = i;
  }
  parents[1] = Infinity;

  const graph = Array(n + 1);
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (const [e1, e2] of edges) {
    graph[e1].push(e2);
    graph[e2].push(e1);
  }

  const q = [1];

  while (q.length) {
    const curr = q.shift();

    for (const next of graph[curr]) {
      if (parents[next] !== next) continue;
      parents[next] = curr;
      q.push(next);
    }
  }

  return parents.filter((_, index) => index > 1).join('\n');
};

// console.log(
//   solution(7, [
//     [1, 6],
//     [6, 3],
//     [3, 5],
//     [4, 1],
//     [2, 4],
//     [4, 7],
//   ])
// );

console.log(
  solution(12, [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [3, 6],
    [4, 7],
    [4, 8],
    [5, 9],
    [5, 10],
    [6, 11],
    [6, 12],
  ])
);
