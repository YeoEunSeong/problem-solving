var shortestToChar = function (s, c) {
  let answer = Array(s.length).fill(Infinity);

  let num = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) num = 0;
    answer[i] = Math.min(answer[i], num++);
  }

  num = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) num = 0;
    answer[i] = Math.min(answer[i], num++);
  }

  return answer;
};
