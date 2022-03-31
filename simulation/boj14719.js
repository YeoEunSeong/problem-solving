const solution = (h, w, arr) => {
  const board = Array.from(Array(h), () => Array(w).fill(0));
  for (const [_w, _h] of arr.entries()) {
    for (let height = 0; height < _h; height++) {
      board[height][_w] = 1;
    }
  }

  const fill = (x, startY, endY) => {
    for (let y = startY + 1; y < endY; y++) {
      board[x][y] = 2;
    }
  };

  for (let i = 0; i < h; i++) {
    let start = -1;
    for (let j = 0; j < w; j++) {
      if (board[i][j] === 1) {
        if (start !== -1) {
          fill(i, start, j);
        }
        start = j;
      }
    }
  }

  return board.flat().filter(x => x === 2).length;
};

console.log(solution(4, 4, [3, 0, 1, 4]));
