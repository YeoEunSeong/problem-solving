function solution(board) {
  let answer;
  let start = 0;
  let end = 10000000;
  let total = 0;

  for (const row of board) {
    for (const x of row) {
      total += x;
    }
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let result = 0;

    for (const row of board) {
      for (const x of row) {
        result += Math.min(x, mid);
      }
    }

    if (total / 2 <= result) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}

console.log(
  solution([
    [2, 3, 1, 5, 6],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
);
