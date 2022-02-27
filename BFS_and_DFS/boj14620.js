const solution = (n, board) => {
  let answer = Infinity;

  const visitedDfs = Array(n ** 2 - 1).fill(false);

  const convertToPoints = arr => {
    const res = [];
    for (const num of arr) {
      res.push([Math.floor(num / n), num % n]);
    }
    return res;
  };

  const dx = [0, 0, 1, 0, -1];
  const dy = [0, -1, 0, 1, 0];

  const getCost = ([x, y], visited) => {
    let cost = 0;
    for (let i = 0; i < 5; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n || visited[nx][ny])
        return Infinity;

      cost += board[nx][ny];
      visited[nx][ny] = true;
    }
    return cost;
  };

  const getTotalCost = points => {
    const visited = Array(n);
    for (let i = 0; i < n; i++) {
      visited[i] = Array(n).fill(false);
    }

    let cost = 0;
    for (const point of points) {
      const temp = getCost(point, visited);
      if (temp === Infinity) return Infinity;
      cost += temp;
    }
    return cost;
  };

  const dfs = (start, res) => {
    if (res.length === 3) {
      const points = convertToPoints(res);
      answer = Math.min(answer, getTotalCost(points));
    } else {
      for (let i = start; i < n ** 2; i++) {
        if (visitedDfs[i]) continue;
        dfs(i + 1, [...res, i]);
      }
    }
  };

  dfs(0, []);
  return answer;
};

console.log(
  solution(6, [
    [1, 0, 2, 3, 3, 4],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1],
    [3, 9, 9, 0, 1, 99],
    [9, 11, 3, 1, 0, 3],
    [12, 3, 0, 0, 0, 1],
  ])
);
