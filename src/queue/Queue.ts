// 基于数组
export class QueueBasedArray<T = any> {
  private queue: T[] = [];
  private count = 0;

  constructor() {}

  enQueue(item: T) {
    this.queue[this.count++] = item;
  }
  deQueue(): T {
    if (this.empty()) {
      return;
    }
    this.count--;
    return this.queue.shift();
  }

  top() {
    if (this.empty()) {
      return null;
    }

    return this.queue[0];
  }
  size() {
    return this.count;
  }
  clear() {
    this.queue = [];
    this.count = 0;
  }
  empty() {
    return this.count === 0;
  }
}

// 基于对象
export class Queue<T = any> {
  private queue: { number?: T } = {};
  private count = 0;
  private head = 0;

  constructor() {}

  enQueue(item: T) {
    this.queue[this.count++] = item;
  }
  deQueue(): T {
    if (this.isEmpty()) {
      return null;
    }
    const temp = this.queue[this.head];
    delete this.queue[this.head++];
    return temp;
  }

  top(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[this.head];
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
