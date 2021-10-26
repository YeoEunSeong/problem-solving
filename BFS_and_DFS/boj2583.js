function solution(m, n, k, points) {
  let answer = 0;
  let area = [];
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  let board = Array(m);
  for (let i = 0; i < m; i++) {
    board[i] = Array(n).fill(0);
  }

  for (const [x1, y1, x2, y2] of points) {
    for (let i = y1; i < y2; i++) {
      for (let j = x1; j < x2; j++) {
        board[i][j] = 1;
      }
    }
  }

  function bfs(x, y) {
    let q = [];
    q.push([x, y]);
    board[x][y] = 2;
    result = 1;

    while (q.length) {
      [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
        if (0 < board[nx][ny]) continue;
        q.push([nx, ny]);
        board[nx][ny] = 2;
        result++;
      }
    }
    return result;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        answer++;
        area.push(bfs(i, j));
      }
    }
  }
  area.sort((a, b) => a - b);
  console.log(answer);
  console.log(area.join(" "));
}

solution(5, 7, 3, [
  [0, 2, 4, 4],
  [1, 1, 2, 5],
  [4, 0, 6, 2],
]);
