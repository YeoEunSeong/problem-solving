function solution(board) {
  let answer = 0;
  let sum = 0;

  for (const row of board) {
    sum = 0;
    for (const col of row) {
      sum += col;
    }
    answer = Math.max(answer, sum);
  }

  for (let col = 0; col < board.length; col++) {
    sum = 0;
    for (let row = 0; row < board[col].length; row++) {
      sum += board[row][col];
    }
    answer = Math.max(answer, sum);
  }

  sum = 0;
  for (let i = 0; i < board.length; i++) {
    sum += board[i][i];
  }
  answer = Math.max(answer, sum);

  sum = 0;
  for (let i = 0; i < board.length; i++) {
    sum += board[i][board.length - i - 1];
  }
  answer = Math.max(answer, sum);

  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
