export class Dictionary<T = any> {
  dataStore = {};

  constructor() {}

  set(key, value: T) {
    this.dataStore[key] = value;
  }
  get(key) {
    return this.dataStore[key];
  }
  remove(key) {
    delete this.dataStore[key];
  }

  keys() {
    return Object.keys(this.dataStore);
  }
  values() {
    return Object.values(this.dataStore);
  }
  has(key) {
    return this.dataStore.hasOwnProperty(key);
  }
  toString() {
    let str = "";
    let key;
    for (key in this.dataStore) {
      str += `${key} -> ${this.dataStore[key]} ;\n`;
    }
    return str;
  }
  size() {
    return Object.keys(this.dataStore).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    let key;
    for (key in this.dataStore) {
      delete this.dataStore[key];
    }
  }
}

// export const Map = Dictionary;
