function solution(board) {
  const n = board.length;

  var answer = 0;
  const visited = new Set();

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const q = [
    {
      left: [0, 0],
      right: [0, 1],
      route: 0,
    },
  ];
  visited.add('0&0&0&1');

  const outOfRange = (x, y) =>
    x < 0 || x >= n || y < 0 || y >= n || board[x][y] === 1;

  while (q.length) {
    const { left, right, route } = q.shift();
    const [x1, y1] = left;
    const [x2, y2] = right;

    console.log(`${x1} ${y1} ${x2} ${y2} ${route}`);

    if ((x1 === n - 1 && y1 === n - 1) || (x2 === n - 1 && y2 === n - 1)) {
      return route;
    }

    // LRUD
    for (let i = 0; i < 4; i++) {
      const nx1 = x1 + dx[i];
      const ny1 = y1 + dy[i];

      const nx2 = x2 + dx[i];
      const ny2 = y2 + dy[i];

      if (outOfRange(nx1, ny1) || outOfRange(nx2, ny2)) {
        continue;
      }

      if (
        !visited.has(`${nx1}&${ny1}&${nx2}&${ny2}`) &&
        !visited.has(`${nx2}&${ny2}&${nx1}&${ny1}`)
      ) {
        visited.add(`${nx1}&${ny1}&${nx2}&${ny2}`);
        q.push({
          left: [nx1, ny1],
          right: [nx2, ny2],
          route: route + 1,
        });
      }
    }

    // Rotate
    if (x1 === x2) {
      const smallY = y1 < y2 ? y1 : y2;
      const largeY = y1 < y2 ? y2 : y1;

      if (
        !outOfRange(x1 - 1, smallY + 1) &&
        board[x1 - 1][smallY] === 0 &&
        !visited.has(`${x1}&${largeY}&${x1 - 1}&${smallY + 1}`) &&
        !visited.has(`${x1 - 1}&${smallY + 1}&${x1}&${largeY}`)
      ) {
        visited.add(`${x1 - 1}&${smallY + 1}&${x1}&${largeY}`);
        q.push({
          left: [x1 - 1, smallY + 1],
          right: [x1, largeY],
          route: route + 1,
        });
      }

      if (
        !outOfRange(x1 + 1, smallY + 1) &&
        board[x1 + 1][smallY] === 0 &&
        !visited.has(`${x1}&${largeY}&${x1 + 1}&${smallY + 1}`) &&
        !visited.has(`${x1 + 1}&${smallY + 1}&${x1}&${largeY}`)
      ) {
        visited.add(`${x1 + 1}&${smallY + 1}&${x1}&${largeY}`);
        q.push({
          left: [x1, largeY],
          right: [x1 + 1, smallY + 1],
          route: route + 1,
        });
      }

      if (
        !outOfRange(x1 - 1, largeY - 1) &&
        board[x1 - 1][largeY] === 0 &&
        !visited.has(`${x1}&${smallY}&${x1 - 1}&${largeY - 1}`) &&
        !visited.has(`${x1 - 1}&${largeY - 1}&${x1}&${smallY}`)
      ) {
        visited.add(`${x1 - 1}&${largeY - 1}&${x1}&${smallY}`);
        q.push({
          left: [x1 - 1, largeY - 1],
          right: [x1, smallY],
          route: route + 1,
        });
      }

      if (
        !outOfRange(x1 + 1, largeY - 1) &&
        board[x1 + 1][largeY] === 0 &&
        !visited.has(`${x1}&${smallY}&${x1 + 1}&${largeY - 1}`) &&
        !visited.has(`${x1 + 1}&${largeY - 1}&${x1}&${smallY}`)
      ) {
        visited.add(`${x1 + 1}&${largeY - 1}&${x1}&${smallY}`);
        q.push({
          left: [x1 + 1, largeY - 1],
          right: [x1, smallY],
          route: route + 1,
        });
      }
    } else {
      const smallX = x1 < x2 ? x1 : x2;
      const largeX = x1 < x2 ? x2 : x1;

      if (
        !outOfRange(smallX + 1, y1 - 1) &&
        board[smallX][y1 - 1] === 0 &&
        !visited.has(`${smallX + 1}&${y1 - 1}&${largeX}&${y1}`) &&
        !visited.has(`${largeX}&${y1}&${smallX + 1}&${y1 - 1}`)
      ) {
        visited.add(`${largeX}&${y1}&${smallX + 1}&${y1 - 1}`);
        q.push({
          left: [smallX + 1, y1 - 1],
          right: [largeX, y1],
          route: route + 1,
        });
      }

      if (
        !outOfRange(smallX + 1, y1 + 1) &&
        board[smallX][y1 + 1] === 0 &&
        !visited.has(`${smallX + 1}&${y1 + 1}&${largeX}&${y1}`) &&
        !visited.has(`${largeX}&${y1}&${smallX + 1}&${y1 + 1}`)
      ) {
        visited.add(`${largeX}&${y1}&${smallX + 1}&${y1 + 1}`);
        q.push({
          left: [largeX, y1],
          right: [smallX + 1, y1 + 1],
          route: route + 1,
        });
      }

      if (
        !outOfRange(largeX - 1, y1 - 1) &&
        board[largeX][y1 - 1] === 0 &&
        !visited.has(`${smallX}&${y1}&${largeX - 1}&${y1 - 1}`) &&
        !visited.has(`${largeX - 1}&${y1 - 1}&${smallX}&${y1}`)
      ) {
        visited.add(`${largeX - 1}&${y1 - 1}&${smallX}&${y1}`);
        q.push({
          left: [largeX - 1, y1 - 1],
          right: [smallX, y1],
          route: route + 1,
        });
      }

      if (
        !outOfRange(largeX - 1, y1 + 1) &&
        board[largeX][y1 + 1] === 0 &&
        !visited.has(`${smallX}&${y1}&${largeX - 1}&${y1 + 1}`) &&
        !visited.has(`${largeX - 1}&${y1 + 1}&${smallX}&${y1}`)
      ) {
        visited.add(`${largeX - 1}&${y1 + 1}&${smallX}&${y1}`);
        q.push({
          left: [largeX - 1, y1 + 1],
          right: [smallX, y1],
          route: route + 1,
        });
      }
    }
  }
}

// 7
console.log(
  solution([
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
  ])
);
