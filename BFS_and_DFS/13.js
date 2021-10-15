function solution(nums) {
  let answer = 0;

  let q = [];
  let ch = Array(nums.length);
  q.push(0);
  ch[0] = true;

  function bfs() {
    let L = 0;
    while (q.length) {
      let len = q.length;
      for (let i = 0; i < len; i++) {
        let x = q.shift();
        for (let j = 1; j <= nums[x]; j++) {
          let nx = x + j;
          if (nx === nums.length - 1) return L + 1;
          if (nums.length <= nx) continue;
          if (ch[nx]) continue;
          ch[nx] = true;
          q.push(nx);
        }
      }
      L++;
    }
    return -1;
  }

  answer = bfs();
  return answer;
}

console.log(solution([2, 2, 0, 2, 1, 1]));
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1]));
