function solution(board, nums) {
  let answer = 0;
  let pos = Array(2);
  for (let i = 0; i < 2; i++) {
    pos[i] = Array(26);
  }

  let check = Array(5);
  for (let i = 0; i < 5; i++) {
    check[i] = Array(5).fill(false);
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      pos[0][board[row][col]] = row;
      pos[1][board[row][col]] = col;
    }
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let x = pos[0][nums[i]];
    let y = pos[1][nums[i]];

    check[x][y] = true;
    let flag = true;
    for (let i = 0; i < board.length; i++) {
      if (!check[x][i]) {
        flag = false;
        break;
      }
    }

    count += flag ? 1 : 0;

    flag = true;
    for (let i = 0; i < board.length; i++) {
      if (!check[i][y]) {
        flag = false;
        break;
      }
    }
    count += flag ? 1 : 0;

    if (x === y) {
      flag = true;
      for (let i = 0; i < board.length; i++) {
        if (!check[i][i]) {
          flag = false;
          break;
        }
      }
      count += flag ? 1 : 0;
    }
    if (x + y === 4) {
      flag = true;
      for (let i = 0; i < board.length; i++) {
        if (!check[i][4 - i]) {
          flag = false;
          break;
        }
      }
      count += flag ? 1 : 0;
    }

    if (3 <= count) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [11, 12, 2, 24, 10],
      [16, 1, 13, 3, 25],
      [6, 20, 5, 21, 17],
      [19, 4, 8, 14, 9],
      [22, 15, 7, 23, 18],
    ],
    [
      5, 10, 7, 16, 2, 4, 22, 8, 17, 13, 3, 18, 1, 6, 25, 12, 19, 23, 14, 21,
      11, 24, 9, 20, 15,
    ]
  )
);
