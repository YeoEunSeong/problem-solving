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

var networkDelayTime = function (times, n, k) {
  let answer = -Infinity;

  let graph = Array(n + 1);
  for (let i = 1; i < n + 1; i++) {
    graph[i] = Array();
  }

  for (const [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  let dist = Array(n + 1).fill(Infinity);

  let pq = new MinHeap();
  pq.insert(k, 0);
  dist[k] = 0;

  while (!pq.empty()) {
    let [currNode, currCost] = pq.get();
    if (dist[currNode] < currCost) continue;

    for (let [nextNode, nextCost] of graph[currNode]) {
      if (currCost + nextCost < dist[nextNode]) {
        dist[nextNode] = currCost + nextCost;
        pq.insert(nextNode, dist[nextNode]);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    answer = Math.max(answer, dist[i]);
  }

  answer = answer === Infinity ? -1 : answer;
  return answer;
};
