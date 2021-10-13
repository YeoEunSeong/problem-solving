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
