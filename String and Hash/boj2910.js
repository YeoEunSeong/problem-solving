function solution(n, c, nums) {
  let answer = [];
  const hs = new Map();

  for (let i = 0; i < n; i++) {
    let x = nums[i];
    if (hs.has(x)) {
      let [cnt, idx] = hs.get(x);
      cnt++;
      hs.set(x, [cnt, idx]);
    } else {
      hs.set(x, [1, i]);
    }
  }

  let tmp = [];
  for (const [key, val] of hs) {
    tmp.push([key, val]);
  }

  tmp.sort((a, b) => {
    if (a[1][0] === b[1][0]) return a[1][1] - b[1][1];
    else return b[1][0] - a[1][0];
  });

  for (const [key, [cnt, idx]] of tmp) {
    for (let i = 0; i < cnt; i++) {
      answer.push(key);
    }
  }
  return answer;
}

console.log(solution(5, 2, [2, 1, 2, 1, 2]));
console.log(solution(9, 3, [1, 3, 3, 3, 2, 2, 2, 1, 1]));
