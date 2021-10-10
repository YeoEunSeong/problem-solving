function solution(info, query) {
  let answer = [];
  let infoArr = [];

  for (const i of info) {
    let temp = i.split(" ");
    infoArr.push(temp);
  }

  for (let i = 0; i < query.length; ++i) {
    let result = 0;
    let queryArr = query[i].split(" and ");

    let temp = queryArr[3].split(" ");
    queryArr.pop();
    for (const x of temp) {
      queryArr.push(x);
    }

    for (let j = 0; j < infoArr.length; ++j) {
      let flag = true;
      for (let k = 0; k < queryArr.length - 1; k++) {
        if (queryArr[k] === "-") continue;
        if (queryArr[k] !== infoArr[j][k]) {
          flag = false;
          break;
        }
      }

      flag =
        flag &&
        parseInt(infoArr[j][queryArr.length - 1]) >=
          parseInt(queryArr[queryArr.length - 1]);
      result += flag ? 1 : 0;
    }
    answer.push(result);
  }

  return answer;
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
