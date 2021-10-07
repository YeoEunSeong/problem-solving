function solution(n) {
  let answer = 0;

  n--;
  for (let i = 2; i <= n; i++) {
    n -= i;
    answer += n % i === 0 ? 1 : 0;
  }
  return answer;
}
