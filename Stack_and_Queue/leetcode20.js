var isValid = function (s) {
  let arr = Array(s.length);
  let stack = [];

  for (const x of s) {
    if (x === "(" || x === "{" || x === "[") stack.push(x);
    else if (x === ")" && stack.pop() === "(") continue;
    else if (x === "}" && stack.pop() === "{") continue;
    else if (x === "]" && stack.pop() === "[") continue;
    else return false;
  }
  return stack.length === 0 ? true : false;
};
