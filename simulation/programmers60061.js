function solution(n, build_frame) {
  let answer = [];

  const isValid = () => {
    for (const [x, y, type] of answer) {
      let check = false;
      if (type === 0) {
        if (y === 0) {
          check = true;
        }

        for (const [_x, _y, _type] of answer) {
          if (x === _x && y === _y && type !== _type) {
            check = true;
          }

          if (x === _x + 1 && y === _y && type !== _type) {
            check = true;
          }

          if (x === _x && y === _y + 1 && type === _type) {
            check = true;
          }
        }
      } else {
        let left = false;
        let right = false;
        for (const [_x, _y, _type] of answer) {
          if (x === _x && y === _y + 1 && type !== _type) {
            check = true;
          }

          if (x + 1 === _x && y === _y + 1 && type !== _type) {
            check = true;
          }

          if (x === _x + 1 && y === _y && type === _type) {
            left = true;
          }

          if (x === _x - 1 && y === _y && type === _type) {
            right = true;
          }
        }

        if (left && right) {
          check = true;
        }
      }

      if (!check) {
        return false;
      }
    }
    return true;
  };

  for (const [x, y, type, action] of build_frame) {
    if (action === 0) {
      const erased = [x, y, type];
      answer = answer.filter(
        ([_x, _y, _type]) => !(x === _x && y === _y && type === _type)
      );

      if (!isValid()) {
        answer.push(erased);
      }
    } else {
      answer.push([x, y, type]);
      if (!isValid()) {
        answer.pop();
      }
    }
  }

  answer.sort((a, b) => {
    if (a[0] === b[0] && a[1] === b[1]) {
      return a[2] - b[2];
    }

    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  return answer;
}

console.log(
  solution(5, [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ])
);
// console.log(
//   solution(5, [
//     [2, 0, 0, 1],
//     [4, 0, 0, 1],
//     [1, 1, 1, 1],
//     [2, 1, 1, 1],
//     [3, 1, 1, 1],
//     [2, 0, 0, 0],
//     [1, 1, 1, 0],
//     [2, 2, 0, 1],
//   ])
// );

[
  [1, 0, 0],
  [1, 1, 1],
  [2, 1, 0],
  [2, 2, 1],
  [3, 2, 1],
  [4, 2, 1],
  [5, 0, 0],
  [5, 1, 0],
];
