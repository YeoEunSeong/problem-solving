class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-1e9);
  }
  insert(a, b) {
    this.heap.push([a, b]);
    this.upheap(this.size());
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.empty()) return false;
    if (this.size() == 1) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.size());

    return res;
  }
  downheap(pos, len) {
    let tmp = this.heap[pos];
    while (pos <= parseInt(len / 2)) {
      let child = pos * 2;
      if (child < len && this.heap[child][1] > this.heap[child + 1][1]) child++;
      if (tmp[1] <= this.heap[child][1]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  empty() {
    return this.size() === 0 ? true : false;
  }
}

var findTheCity = function (n, edges, distanceThreshold) {
  let answer = 0;

  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = Array();
  }

  for (const [from, to, weight] of edges) {
    graph[from].push([to, weight]);
    graph[to].push([from, weight]);
  }

  function dijkstra(start) {
    dist[start] = 0;
    let pq = new MinHeap();
    pq.insert(start, 0);

    while (!pq.empty()) {
      let [currNode, currCost] = pq.get();
      if (dist[currNode] < currCost) continue;

      for (const [nextNode, nextCost] of graph[currNode]) {
        if (currCost + nextCost < dist[nextNode]) {
          dist[nextNode] = currCost + nextCost;
          pq.insert(nextNode, dist[nextNode]);
        }
      }
    }
  }

  let cntArr = Array(n);
  let dist = Array(n).fill(Infinity);
  for (let i = 0; i < n; i++) {
    dist.fill(Infinity);
    dijkstra(i);
    let cnt = 0;

    for (const d of dist) {
      if (0 < d && d <= distanceThreshold) cnt++;
    }
    cntArr[i] = cnt;
  }

  let minValue = Infinity;
  for (let i = 0; i < n; i++) {
    if (cntArr[i] <= minValue) {
      minValue = cntArr[i];
      answer = i;
    }
  }

  return answer;
};
