const solution = (n, nodes) => {
  if (n === 1) {
    return 0;
  }
  const graph = Array.from(Array(n + 1), () => Array());

  for (const [node1, node2, cost] of nodes) {
    graph[node1].push([node2, cost]);
    graph[node2].push([node1, cost]);
  }

  const findFarthestNode = start => {
    let farthestNode = null;
    let distance = 0;

    const visited = Array(n + 1).fill(false);
    visited[start] = true;
    const q = [[start, 0]];
    visited[start] = true;

    while (q.length) {
      const [curr, dist] = q.shift();

      if (dist > distance) {
        farthestNode = curr;
        distance = dist;
      }

      for (const [next, cost] of graph[curr]) {
        if (!visited[next]) {
          q.push([next, dist + cost]);
          visited[next] = true;
        }
      }
    }

    return farthestNode;
  };

  const farthestNode1 = findFarthestNode(1);
  const farthestNode2 = findFarthestNode(farthestNode1);

  const getRoute = (start, destination) => {
    const visited = Array(n + 1).fill(false);
    const q = [[start, 0]];
    visited[start] = true;

    while (q.length) {
      const [curr, dist] = q.shift();

      if (curr === destination) {
        return dist;
      }

      for (const [next, cost] of graph[curr]) {
        if (!visited[next]) {
          q.push([next, dist + cost]);
          visited[next] = true;
        }
      }
    }
  };

  const distance = getRoute(farthestNode1, farthestNode2);
  return distance;
};
console.log(solution(1, []));
