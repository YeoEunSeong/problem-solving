function solution(n, m, board) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === 0) continue;
      board[i][j] += Math.min(
        board[i - 1][j],
        board[i][j - 1],
        board[i - 1][j - 1]
      );
      answer = Math.max(answer, board[i][j] * board[i][j]);
    }
  }
  return answer;
}

console.log(
  solution(4, 4, [
    [0, 1, 0, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [0, 0, 1, 0],
  ])
);
