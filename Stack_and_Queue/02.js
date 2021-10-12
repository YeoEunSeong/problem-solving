function solution(s) {
  let answer;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ")") stack.push(s[i]);
    while (s[i] === ")" && stack.pop() !== "(");
  }

  answer = stack.join("");
  return answer;
}
