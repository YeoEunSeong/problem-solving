const solution = (n, target1, target2, m, arr) => {
  const graph = Array(n + 1);
  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (const [x, y] of arr) {
    graph[x].push(y);
    graph[y].push(x);
  }

  let q = [[target1, 0]];
  const visited = Array(n + 1).fill(false);
  visited[target1] = true;

  while (q.length) {
    let [curr, count] = q.shift();
    if (curr === target2) return count;

    for (const next of graph[curr]) {
      if (visited[next]) continue;
      q.push([next, count + 1]);
      visited[next] = true;
    }
  }

  return -1;
};

console.log(
  solution(9, 7, 3, 7, [
    [1, 2],
    [1, 3],
    [2, 7],
    [2, 8],
    [2, 9],
    [4, 5],
    [4, 6],
  ])
);
