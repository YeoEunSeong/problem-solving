// 문제 및 풀이: https://velog.io/@e7838752/programmers86971
function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let parent = Array(n + 1);

  function findParent(x) {
    if (x === parent[x]) return x;
    else return findParent(parent[x]);
  }

  function unionParent(a, b) {
    a = findParent(a);
    b = findParent(b);

    if (a < b) parent[b] = a;
    else parent[a] = b;
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j <= n; ++j) {
      parent[j] = j;
    }
    for (let j = 0; j < n - 1; j++) {
      if (i === j) continue;
      unionParent(wires[j][0], wires[j][1]);
    }

    const hs = new Map();
    for (let j = 1; j <= n; j++) {
      let p = findParent(j);
      hs.set(p, (hs.get(p) || 0) + 1);
    }

    let op = true;
    let temp = 0;
    for (const [key, value] of hs) {
      temp += op ? value : -value;
      op = false;
    }
    answer = Math.min(answer, Math.abs(temp));
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
