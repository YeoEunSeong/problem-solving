function solution(n, computers) {
  var answer = 0;
  let parent = Array(n + 1);
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  function findParent(x) {
    if (parent[x] === x) return x;
    return (parent[x] = findParent(parent[x]));
  }

  function unionParent(a, b) {
    a = findParent(a);
    b = findParent(b);

    if (a < b) parent[b] = a;
    else parent[a] = b;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) unionParent(i, j);
    }
  }

  const hs = new Map();
  for (let i = 0; i < n; i++) {
    const x = findParent(i);
    hs.set(x, (hs.get(x) || 0) + 1);
  }

  answer = hs.size;
  return answer;
}
