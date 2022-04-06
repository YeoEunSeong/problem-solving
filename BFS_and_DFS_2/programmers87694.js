function solution(rectangle, characterX, characterY, itemX, itemY) {
  const N = 102;
  const board = Array.from(Array(N), () => Array(N).fill(0));
  const visited = Array.from(Array(N), () => Array(N).fill(false));

  for (const [x1, y1, x2, y2] of rectangle) {
    for (let x = x1 * 2; x <= x2 * 2; x++) {
      for (let y = y1 * 2; y <= y2 * 2; y++) {
        board[x][y] += 1;
      }
    }
  }

  const dx = [0, 1, 0, -1, -1, 1, -1, 1];
  const dy = [-1, 0, 1, 0, -1, -1, 1, 1];

  const q = [[characterX * 2, characterY * 2, 0]];
  visited[characterX * 2][characterY * 2] = true;

  const canMove = (x, y) => {
    if (x < 0 || x >= N || y < 0 || y >= N) {
      return false;
    }

    if (visited[x][y] || board[x][y] > 2 || board[x][y] === 0) {
      return false;
    }

    let isOutLine = false;
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) {
        continue;
      }

      if (board[nx][ny] === 0) {
        isOutLine = true;
        break;
      }
    }
    return isOutLine;
  };

  while (q.length) {
    const [x, y, route] = q.shift();

    if (x === itemX * 2 && y === itemY * 2) {
      return route / 2;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (canMove(nx, ny)) {
        visited[nx][ny] = true;
        q.push([nx, ny, route + 1]);
      }
    }
  }
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);

console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3
  )
);
