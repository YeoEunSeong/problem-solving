function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let num1, num2;
    switch (s[i]) {
      case "+":
        num1 = parseInt(stack.pop());
        num2 = parseInt(stack.pop());
        stack.push(num2 + num1);
        break;
      case "-":
        num1 = parseInt(stack.pop());
        num2 = parseInt(stack.pop());
        stack.push(num2 - num1);
        break;
      case "*":
        num1 = parseInt(stack.pop());
        num2 = parseInt(stack.pop());
        stack.push(num2 * num1);
        break;
      case "/":
        num1 = parseInt(stack.pop());
        num2 = parseInt(stack.pop());
        stack.push(num2 / num1);
        break;

      default:
        stack.push(s[i]);
        break;
    }
  }
  answer = stack.pop();
  return answer;
}
