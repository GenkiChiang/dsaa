export class DoubleLinkedNode<T = any> {
  value: T = null;
  next: DoubleLinkedNode<T> = null;
  prev: DoubleLinkedNode<T> = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoubleLinkedList<T = any> {
  first: DoubleLinkedNode<T> = null;
  last: DoubleLinkedNode<T> = null;
  count = 0;

  push(value: T) {
    const node = new DoubleLinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }

    this.count++;
  }
  unshift(value: T) {
    const node = new DoubleLinkedNode<T>(value);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first.prev = node;
      this.first = node;
    }

    this.count++;
  }
  insertAt(value: T, index: number) {
    if (index >= this.count || this.isEmpty()) {
      return;
    }
    // index <= 0, 都添加到头部
    if (index <= 0) {
      this.unshift(value);
      return;
    }

    const node = new DoubleLinkedNode<T>(value);
    const prev = this.getAt(index - 1);
    const next = prev.next;
    prev.next = node;
    node.next = next;
    next.prev = node;
    node.prev = prev;

    this.count++;
  }

  pop(): DoubleLinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    const last = this.last;

    const prev = last.prev;
    if (prev === null) {
      this.first = null;
    } else {
      prev.next = null;
    }
    this.last = prev;

    this.count--;
    return last;
  }
  shift(): DoubleLinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    const first = this.first;

    const next = first.next;
    if (next === null) {
      this.last = null;
    } else {
      next.prev = null;
    }
    this.first = next;

    this.count--;
    return first;
  }
  removeAt(index: number): DoubleLinkedNode<T> {
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
    current.next.prev = prev;

    this.count--;
    return current;
  }

  getFirst(): DoubleLinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    return this.first;
  }
  getLast(): DoubleLinkedNode<T> {
    if (this.isEmpty()) {
      return null;
    }
    return this.last;
  }
  getAt(index: number): DoubleLinkedNode<T> {
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
