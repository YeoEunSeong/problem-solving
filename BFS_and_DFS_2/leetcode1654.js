var minimumJumps = function (forbidden, a, b, x) {
  let forbid = Array(2001).fill(0);
  for (const f of forbidden) {
    forbid[f] = 1;
  }

  let visited = Array(2);
  for (let i = 0; i < 2; i++) {
    visited[i] = Array(5000).fill(0);
  }
  visited[0][0] = 1;
  visited[1][0] = 1;

  let q = [];
  q.push([0, 0, false]);

  while (q.length) {
    let [front, L, flag] = q.shift();
    if (front === x) return L;

    let forward = front + a;
    if (forward <= 2000 + b * 2 && !visited[0][forward] && !forbid[forward]) {
      visited[0][forward] = 1;
      q.push([forward, L + 1, false]);
    }

    let backward = front - b;
    if (!flag && 0 <= backward && !visited[1][backward] && !forbid[backward]) {
      visited[1][backward] = 1;
      q.push([backward, L + 1, true]);
    }
  }
  return -1;
};
