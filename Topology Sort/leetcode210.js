function solution(numCourses, prerequisites) {
  let answer = [];
  let indegree = Array(numCourses).fill(0);
  let graph = Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = Array();
  }

  for (const [pre, post] of prerequisites) {
    graph[post].push(pre);
    indegree[pre]++;
  }

  let q = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) q.push(i);
  }

  while (q.length) {
    let curr = q.shift();
    answer.push(curr);

    for (let i = 0; i < graph[curr].length; i++) {
      if (--indegree[graph[curr][i]] === 0) q.push(graph[curr][i]);
    }
  }

  for (const x of indegree) {
    if (x) return [];
  }
  return answer;
}

console.log(
  solution(3, [
    [0, 2],
    [1, 2],
    [2, 0],
  ])
);
console.log(
  solution(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
);
console.log(solution(2, [[1, 0]]));
console.log(solution(1, []));
console.log(
  solution(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
