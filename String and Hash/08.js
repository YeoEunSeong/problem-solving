function classLeader(str) {
  let result = new Map();

  for (const x of str) {
    result.set(x, (result.get(x) || 0) + 1);
  }

  let answer;
  let votes = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of result) {
    if (votes < value) {
      answer = key;
      votes = value;
    }
  }
  return answer;
}

console.log(classLeader("BACBACCACCBDEDE"));