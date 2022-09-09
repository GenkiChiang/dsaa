// 集合
export class Set {
  collections = {};
  constructor() {}

  set(value) {
    if (this.has(value)) {
      return;
    }
    this.collections[value] = value;
  }
  remove(value) {
    if (!this.has(value)) {
      return false;
    }
    delete this.collections[value];
  }

  has(value) {
    return this.collections.hasOwnProperty(value);
  }
  values() {
    return Object.values(this.collections);
  }

  size() {
    return Object.keys(this.collections).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.collections = {};
  }

  // 并集、交集、差集、子集
}
