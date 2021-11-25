class MinHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-1e9);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.size());
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }

  top() {
    return this.heap[1];
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
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
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

var nthUglyNumber = function (n) {
  let answer = 1;
  let pq = new MinHeap();
  let set = new Set();
  let cnt = 1;
  const operand = [2, 3, 5];
  set.add(1);
  pq.insert(1);

  while (true) {
    let curr = pq.get();
    if (cnt++ === n) return curr;

    for (const op of operand) {
      if (set.has(curr * op)) continue;

      pq.insert(curr * op);
      set.add(curr * op);
    }
  }
  return answer;
};

console.log(nthUglyNumber(1));
