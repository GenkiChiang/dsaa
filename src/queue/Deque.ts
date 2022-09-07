/**
 * 双端队列
 */
export class Deque<T = any> {
  private queue: { number?: T } = {};
  private count = 0;
  private head = 0;

  constructor() {}

  addFront(item: T) {
    this.queue[--this.head] = item;
  }
  addBack(item: T) {
    this.queue[this.count++] = item;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    }
    const temp = this.queue[this.head];
    delete this.queue[this.head++];
    return temp;
  }
  removeBack() {
    if (this.isEmpty()) {
      return null;
    }
    const temp = this.queue[this.count - 1];
    delete this.queue[--this.count];
    return temp;
  }

  frontTop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }
  backTop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.count - 1];
  }

  size() {
    return this.length();
  }
  clear() {
    this.queue = {};
    this.count = 0;
    this.head = 0;
  }
  isEmpty() {
    return this.length() === 0;
  }

  length() {
    return this.count - this.head;
  }
}
