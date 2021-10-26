function solution(n, s) {
  function vps(str) {
    let stack = [];

    for (const x of str) {
      if (x === "(") stack.push(x);
      else if (!stack.length) return false;
      else stack.pop();
    }
    return !stack.length;
  }

  for (let i = 0; i < n; i++) {
    let result = vps(s[i]) ? "YES" : "NO";
    console.log(result);
  }
}

solution(3, ["(())())", "(((()())()", "(()())((()))"]);
