function solution(s) {
  let answer = "";

  let stack = [];
  for (const x of s) {
    if (x !== "]") {
      stack.push(x);
    } else {
      let str = "";
      let tmp = stack.pop();
      while (tmp !== "[") {
        str = tmp + str;
        tmp = stack.pop();
      }

      let num = "";
      while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
        num = stack.pop() + num;
      }
      stack.push(str.repeat(parseInt(num)));
    }
  }

  while (stack.length) {
    answer = stack.pop() + answer;
  }

  return answer;
}

console.log(solution("3[a]2[bc]"));
