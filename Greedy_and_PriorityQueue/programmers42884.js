function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[1] - b[1]);
  let lt = 0;

  for (let i = 1; i < routes.length; i++) {
    if (routes[lt][1] < routes[i][0]) {
      lt = i;
      answer++;
    }
  }
  return answer;
}
