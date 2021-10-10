function solution(students) {
  let answer;
  let maxVal = 0;

  for (let i = 0; i < students.length; i++) {
    let cnt = 0;
    for (let j = 0; j < students.length; j++) {
      for (let k = 0; k < 5; k++) {
        if (students[i][k] === students[j][k]) {
          cnt++;
          break;
        }
      }
    }
    if (maxVal < cnt) {
      answer = i + 1;
      maxVal = cnt;
    }
  }

  return answer;
}

console.log(
  solution([
    [2, 3, 1, 7, 3],
    [4, 1, 9, 6, 8],
    [5, 5, 2, 4, 4],
    [6, 5, 2, 6, 7],
    [8, 4, 2, 2, 2],
  ])
);
