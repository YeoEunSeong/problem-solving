function solution(s) {
  let answer = "YES";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    else if (!stack.length) return "NO";
    else stack.pop();
  }

  answer = stack.length === 0 ? "YES" : "NO";
  return answer;
}
