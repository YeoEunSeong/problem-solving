function solution(arr) {
  const answer = [];
  const n = arr.length;
  const graph = Array(n + 1);
  for (let i = 1; i < n + 1; i++) {
    graph[i] = Array();
  }
  const indegrees = Array(n + 1).fill(0);

  for (const [from, to] of arr) {
    graph[from].push(to);
    indegrees[to]++;
  }

  let q = [];
  for (let i = 1; i < n + 1; i++) {
    if (indegrees[i] === 0) q.push(i);
  }

  while (q.length) {
    let curr = q.shift();
    answer.push(curr);

    for (const next of graph[curr]) {
      indegrees[next]--;
      if (indegrees[next] === 0) q.push(next);
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 4],
    [5, 4],
    [4, 3],
    [2, 5],
    [2, 3],
    [6, 2],
  ])
);
