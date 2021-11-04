function solution(numCourses, prerequisites) {
  let indegree = Array(numCourses).fill(0);
  let graph = Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = Array();
  }

  for (const [pre, post] of prerequisites) {
    graph[pre].push(post);
    indegree[post]++;
  }

  let q = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) q.push(i);
  }

  while (q.length) {
    let curr = q.shift();

    for (let i = 0; i < graph[curr].length; i++) {
      if (--indegree[graph[curr][i]] === 0) q.push(graph[curr][i]);
    }
  }

  for (const x of indegree) {
    if (x) return false;
  }

  return true;
}

console.log(solution(2, [[1, 0]]));
console.log(
  solution(2, [
    [1, 0],
    [0, 1],
  ])
);
