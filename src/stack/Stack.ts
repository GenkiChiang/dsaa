export class Stack<T = any> {
  private data: Iterable<T> = [];
  private count = 0;
  constructor() {}

  push(item: T) {
    this.data[this.count] = item;
    this.count++;
  }
  pop(): T {
    if (this.isEmpty()) {
      return null;
    }
    const temp = this.data[this.count - 1];
    delete this.data[this.count - 1];
    this.count--;

    return temp;
  }
  top(): T {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.count - 1];
  }
  size() {
    return this.count;
  }

  clear() {
    while (this.count !== 0) {
      delete this.data[this.count];
      this.count--;
    }
  }

  isEmpty() {
    return this.count === 0;
  }
}
