function solution(n, compare) {
  let answer = 0;
  let dist = Array(n);
  for (let i = 0; i < n; i++) {
    dist[i] = Array(n).fill(Infinity);
  }
  for (let i = 0; i < i; i++) {
    dist[i][i] = 0;
  }

  for (const [a, b] of compare) {
    dist[a - 1][b - 1] = 1;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (dist[i][j] !== Infinity && dist[i][j] > 0) cnt++;
      if (dist[j][i] !== Infinity && dist[i][j] > 0) cnt++;
    }
    answer += cnt === n - 1 ? 1 : 0;
  }
  return answer;
}

console.log(
  solution(6, [
    [1, 5],
    [3, 4],
    [5, 4],
    [4, 2],
    [4, 6],
    [5, 2],
  ])
);
