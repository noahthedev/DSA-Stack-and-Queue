class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top = null) {
      this.top = new _Node(data, null);
      return this.top;
    }
  }
}