function solution(s, e) {
  let answer;
  let visited = Array(10001).fill(0);
  const move = [1, -1, 5];

  function bfs() {
    let q = [];
    q.push(s);
    visited[s] = 1;
    let L = 0;
    while (q.length) {
      let len = q.length;
      for (let i = 0; i < len; i++) {
        let front = q.shift();

        for (const d of move) {
          if (front + d === e) return L + 1;
          q.push(front + d);
        }
      }
      L++;
    }
    return -1;
  }
  answer = bfs();
  return answer;
}

console.log(solution(5, 14));
console.log(solution(8, 3));
