var maxDepth = function (s) {
  let answer = 0;
  let stack = [];

  for (const x of s) {
    if (x === ")") stack.pop();
    else {
      if (x === "(") stack.push(0);
      answer = Math.max(answer, stack.length);
    }
  }

  return answer;
};
