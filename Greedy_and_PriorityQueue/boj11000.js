class MaxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(1e9);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.size());
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp > this.heap[parseInt(pos / 2)]) {
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
      if (child < len && this.heap[child] < this.heap[child + 1]) child++;
      if (tmp >= this.heap[child]) break;
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

const solution = (n, times) => {
  const pq = new MaxHeap();
  times.sort((t1, t2) => t1[1] - t2[1]);

  for (const [start, end] of times) {
    if (pq.empty()) {
      pq.insert(-end);
      continue;
    }

    const curr = -pq.get();
    pq.insert(-end);

    if (start < curr) {
      pq.insert(-curr);
    }
  }

  return pq.size();
};

console.log(
  solution(3, [
    [1, 3],
    [2, 4],
    [3, 5],
  ])
);

console.log(
  solution(4, [
    [1, 3],
    [2, 4],
    [4, 8],
    [3, 5],
  ])
);
