function solution(board) {
  let answer;
  const N = 7;
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];

  function bfs() {
    let q = [];
    q.push([0, 0]);
    board[0][0] = 1;

    let L = 0;
    while (q.length) {
      let len = q.length;
      for (let i = 0; i < len; i++) {
        let [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
          let nx = x + dx[i];
          let ny = y + dy[i];

          if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
          if (board[nx][ny] === 1) continue;
          if (nx === N - 1 && ny === N - 1) return L + 1;
          board[nx][ny] = 1;
          q.push([nx, ny]);
        }
      }
      L++;
    }
    return -1;
  }
  answer = bfs();
  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
  ])
);
