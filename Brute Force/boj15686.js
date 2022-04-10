const solution = (n, m, board) => {
  let answer = Infinity;
  const chickens = [];
  const houses = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        chickens.push([i, j]);
        board[i][j] = 0;
      } else if (board[i][j] === 1) {
        houses.push([i, j]);
      }
    }
  }

  const chickensLength = chickens.length;
  const visited = Array(chickensLength).fill(false);

  const getChickenDistance = ([x, y], chickensSelected) => {
    let dist = Infinity;
    for (const index of chickensSelected) {
      const [cx, cy] = chickens[index];
      dist = Math.min(dist, Math.abs(cx - x) + Math.abs(cy - y));
    }
    return dist;
  };

  const getTotalChickensDistance = res =>
    houses
      .map(house => getChickenDistance(house, res))
      .reduce((prev, curr) => prev + curr, 0);

  const dfs = (start, res) => {
    if (res.length === m) {
      answer = Math.min(answer, getTotalChickensDistance(res));
    } else {
      for (let i = start; i < chickensLength; i++) {
        if (!visited[i]) {
          visited[i] = true;
          dfs(i + 1, [...res, i]);
          visited[i] = false;
        }
      }
    }
  };

  dfs(0, []);

  return answer;
};

console.log(
  solution(5, 3, [
    [0, 0, 1, 0, 0],
    [0, 0, 2, 0, 1],
    [0, 1, 2, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 2],
  ])
);
