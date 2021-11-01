function solution(n, board) {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  let cnt = 0;
  let area = [];
  let visited = Array(n);
  for (let i = 0; i < n; i++) {
    visited[i] = Array(n).fill(0);
  }

  function dfs(x, y) {
    if (board[x][y] === 0) return 0;
    let result = 1;
    visited[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited[nx][ny]) continue;
      if (board[nx][ny] === 1) {
        visited[nx][ny] = 1;
        result += dfs(nx, ny);
      }
    }

    return result;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        cnt++;
        area.push(dfs(i, j));
      }
    }
  }

  area.sort((a, b) => a - b);
  return [cnt, area];
}

console.log(
  solution(7, [
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0],
  ])
);
