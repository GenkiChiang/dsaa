export class LinkedNode<T = any> {
  value: T = null;
  next: LinkedNode<T> = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T = any> {
  first: LinkedNode<T> = null;
  last: LinkedNode<T> = null;
  count = 0;

  push(value: T) {
    const linkedNode = new LinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = linkedNode;
      this.last = linkedNode;
    } else {
      this.last.next = linkedNode;
      this.last = linkedNode;
    }

    this.count++;
  }
  unshift(value: T) {
    const linkedNode = new LinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = linkedNode;
      this.last = linkedNode;
    } else {
      linkedNode.next = this.first;
      this.first = linkedNode;
    }

    this.count++;
  }
  insertAt(value: T, index: number) {
    if (index >= this.count || this.isEmpty()) {
      return;
    }
    // index <= 0, 都添加到头部
    if (index <= 0) {
      this.push(value);
      return;
    }

    const linkedNode = new LinkedNode<T>(value);
    const prev = this.getAt(index - 1);
    linkedNode.next = prev.next;
    prev.next = linkedNode;

    this.count++;
  }

  pop(): LinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    const last = this.last;

    const prev = this.getAt(this.count - 2);
    if (prev === null) {
      this.first = null;
    } else {
      prev.next = null;
    }
    this.last = prev;

    this.count--;
    return last;
  }
  shift(): LinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    const first = this.first;

    const next = first.next;
    if (next === null) {
      this.last = null;
    }
    this.first = next;

    this.count--;
    return first;
  }
  removeAt(index: number): LinkedNode<T> {
    if (index < 0 || this.isEmpty() || index >= this.count) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.count - 1) {
      return this.pop();
    }
    const prev = this.getAt(index - 1);
    const current = prev.next;
    prev.next = current.next;

    this.count--;
    return current;
  }

  getFirst(): LinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    return this.first;
  }
  getLast(): LinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    return this.last;
  }
  getAt(index: number): LinkedNode<T> {
    if (
      typeof index !== "number" ||
      index < 0 ||
      index >= this.count ||
      this.isEmpty()
    ) {
      return null;
    }
    if (index === this.count - 1) {
      return this.last;
    }

    let current = this.first;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    return current;
  }

  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  clear() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }
}
