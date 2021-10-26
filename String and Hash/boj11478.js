function solution(s) {
  let answer;
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      set.add(s.substring(i, j));
    }
  }
  answer = set.size;
  return answer;
}

console.log(solution("ababc"));
