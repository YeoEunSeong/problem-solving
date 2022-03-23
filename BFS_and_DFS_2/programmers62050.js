const solution = (land, height) => {
  const n = land.length;
  const m = land[0].length;
  const area = Array(n);
  for (let i = 0; i < n; i++) {
    area[i] = Array(m).fill(0);
  }

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const outOfRange = (x, y) => x < 0 || x >= n || y < 0 || y >= m;

  const bfs = (sx, sy, val) => {
    const q = [[sx, sy]];

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          outOfRange(nx, ny) ||
          area[nx][ny] !== 0 ||
          Math.abs(land[x][y] - land[nx][ny]) > height
        ) {
          continue;
        }
        area[nx][ny] = val;
        q.push([nx, ny]);
      }
    }
  };

  let areaIndex = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (area[i][j] !== 0) {
        continue;
      }
      area[i][j] = areaIndex;
      bfs(i, j, areaIndex);
      areaIndex += 1;
    }
  }

  const arr = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (outOfRange(nx, ny) || area[x][y] === area[nx][ny]) {
          continue;
        }

        arr.push([
          area[x][y],
          area[nx][ny],
          Math.abs(land[x][y] - land[nx][ny]),
        ]);
      }
    }
  }

  arr.sort((a, b) => a[2] - b[2]);

  const length = Math.max(...area.flat()) + 1;

  const parents = Array(length);
  for (let i = 1; i < length; i++) {
    parents[i] = i;
  }

  const findParent = x => {
    if (x === parents[x]) {
      return x;
    }
    return (parents[x] = findParent(parents[x]));
  };

  const unionParents = (a, b) => {
    a = findParent(a);
    b = findParent(b);

    if (a < b) {
      parents[b] = a;
    } else {
      parents[a] = b;
    }
  };

  let totalCost = 0;
  for (const [from, to, cost] of arr) {
    if (findParent(from) !== findParent(to)) {
      unionParents(from, to);
      totalCost += cost;
    }
  }

  return totalCost;
};

// console.log(
//   solution(
//     [
//       [1, 4, 8, 10],
//       [5, 5, 5, 5],
//       [10, 10, 10, 10],
//       [10, 10, 10, 20],
//     ],
//     3
//   )
// );
// 15

console.log(
  solution(
    [
      [10, 11, 10, 11],
      [2, 21, 20, 10],
      [1, 20, 21, 11],
      [2, 1, 2, 1],
    ],
    1
  )
);
// 15
