function solution(n, s, a, b, fares) {
  var answer = Infinity;
  let dist = Array(n);
  for (let i = 0; i < n; i++) {
    dist[i] = Array(n).fill(Infinity);
  }
  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (const [c, d, f] of fares) {
    dist[c - 1][d - 1] = f;
    dist[d - 1][c - 1] = f;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    answer = Math.min(answer, dist[s - 1][i] + dist[i][a - 1] + dist[i][b - 1]);
  }

  return answer;
}
