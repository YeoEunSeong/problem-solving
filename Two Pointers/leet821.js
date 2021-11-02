var shortestToChar = function (s, c) {
  let answer = Array(s.length).fill(Infinity);
  let lt = 0;

  for (let rt = 0; rt < s.length; rt++) {
    while (s[rt] === c && lt <= rt) {
      answer[lt] = Math.abs(rt - lt++);
    }
  }

  lt = s.length - 1;
  for (let rt = s.length - 1; rt >= 0; rt--) {
    while (s[rt] === c && lt >= rt) {
      answer[lt] = Math.min(answer[lt], Math.abs(rt - lt--));
    }
  }

  return answer;
};
