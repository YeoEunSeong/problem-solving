class Node {
  constructor() {
    this.end = false;
    this.child = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let cur = this.root;
    for (const x of word) {
      if (cur.child[x] === undefined) {
        cur.child[x] = new Node();
      }
      cur = cur.child[x];
    }
    cur.end = true;
  }

  search(word) {
    let cur = this.root;
    for (const x of word) {
      if (cur.child[x] === undefined) return false;
      cur = cur.child[x];
    }
    return cur.end;
  }

  prefixSearch(str) {
    let cur = this.root;
    for (const x of str) {
      if (cur.child[x] === undefined) return false;
      cur = cur.child[x];
    }
    return true;
  }
}
