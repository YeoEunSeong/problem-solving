const solution = board => {
  let answer = 0;
  const N = 12;
  const M = 6;
  const visited = Array.from(Array(N), () => Array(M).fill(false));

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  // find will be remove
  let toBeRemoved = [];

  const bfs = (x, y) => {
    visited[x][y] = true;
    const res = [[x, y]];
    const color = board[x][y];
    const q = [[x, y]];

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M || visited[nx][ny]) {
          continue;
        }
        if (board[nx][ny] === color) {
          res.push([nx, ny]);
          q.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
    if (res.length >= 4) {
      toBeRemoved.push(res);
    }
  };

  do {
    toBeRemoved = [];
    visited.map(x => x.fill(false));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] !== '.' && !visited[i][j]) {
          bfs(i, j);
        }
      }
    }

    // remove from board

    for (const _toBeRemoved of toBeRemoved) {
      for (const [x, y] of _toBeRemoved) {
        board[x][y] = '.';
      }
    }

    // pull puyo down
    for (let col = 0; col < M; col++) {
      let temp = Array(N);
      for (let row = 0; row < N; row++) {
        temp[row] = board[row][col];
      }
      temp = temp.filter(x => x !== '.').reverse();

      while (temp.length < N) {
        temp.push('.');
      }

      for (let row = 0; row < N; row++) {
        board[row][col] = temp[N - row - 1];
      }
    }

    answer += toBeRemoved.length;
  } while (toBeRemoved.length > 0);

  return answer;
};

console.log(
  solution([
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.'],
    ['.', 'Y', '.', '.', '.', '.'],
    ['.', 'Y', 'G', '.', '.', '.'],
    ['R', 'R', 'Y', 'G', 'G', '.'],
    ['R', 'R', 'Y', 'G', 'G', '.'],
  ])
);
