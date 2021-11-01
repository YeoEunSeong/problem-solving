function solution(n, k, num) {
  let answer;
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] - num[i] < 0 && k) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  answer = stack.join("").substring(0, stack.length - k);
  return answer;
}

console.log(solution(4, 2, "1924"));
console.log(solution(7, 3, "1231234"));
console.log(solution(10, 4, "4177252841"));
console.log(solution(10, 4, "9876504321"));
