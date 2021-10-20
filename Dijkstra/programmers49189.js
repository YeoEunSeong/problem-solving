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

function solution(n, edge) {
  var answer = 0;
  let graph = Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    graph[i] = Array();
  }

  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let dist = Array(n + 1).fill(Infinity);

  let pq = new MinHeap();
  pq.insert(1, 0);
  dist[1] = 0;

  while (!pq.empty()) {
    let [currNode, currCost] = pq.get();
    if (dist[currNode] < currCost) continue;

    for (let nextNode of graph[currNode]) {
      if (currCost + 1 < dist[nextNode]) {
        dist[nextNode] = currCost + 1;
        pq.insert(nextNode, dist[nextNode]);
      }
    }
  }

  let hs = new Map();

  let maxValue = -Infinity;
  for (let x of dist) {
    if (x === Infinity) continue;
    maxValue = Math.max(maxValue, x);
    hs.set(x, (hs.get(x) || 0) + 1);
  }
  answer = hs.get(maxValue);
  return answer;
}
