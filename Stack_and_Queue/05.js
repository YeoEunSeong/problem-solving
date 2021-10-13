function solution(n, k) {
  let answer = 0;
  let q = Array(n);

  for (let i = 0; i < n; i++) {
    q[i] = i + 1;
  }

  let index = 0;
  while (q.length) {
    index++;
    answer = q.shift();
    if (index === 3) {
      index = 0;
      continue;
    }
    q.push(answer);
  }
  return answer;
}
