function solution(s1, s2) {
  let answer = 0;
  const n = s1.length;
  const m = s2.length;
  let dy = Array(n + 1);

  for (let i = 0; i < n + 1; i++) {
    dy[i] = Array(m + 1).fill(0);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (s1[i] === s2[j]) {
        dy[i + 1][j + 1] = dy[i][j] + 1;
      } else {
        dy[i + 1][j + 1] = Math.max(dy[i][j + 1], dy[i + 1][j]);
      }
      answer = Math.max(answer, dy[i + 1][j + 1]);
    }
  }
  return answer;
}
