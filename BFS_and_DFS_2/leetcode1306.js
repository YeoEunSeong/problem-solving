var canReach = function (arr, start) {
  let n = arr.length;
  let visited = Array(n).fill(0);
  let q = [];
  q.push(start);
  visited[start] = 1;

  while (q.length) {
    let front = q.shift();
    if (arr[front] === 0) return true;
    if (0 <= front + arr[front] && !visited[front + arr[front]]) {
      visited[front + arr[front]] = 1;
      q.push(front + arr[front]);
    }

    if (front - arr[front] < n && !visited[front - arr[front]]) {
      visited[front - arr[front]] = 1;
      q.push(front - arr[front]);
    }
  }
  return false;
};
