var minAddToMakeValid = function (s) {
  let answer = 0;
  let stack = [];

  for (const x of s) {
    if (stack.length && stack[stack.length - 1] === "(" && x === ")")
      stack.pop();
    else stack.push(x);
  }

  answer = stack.length;
  return answer;
};
