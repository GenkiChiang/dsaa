import { count } from "console";

type Bucket = [string, any][];

const isPrime = (num) => {
  if (num <= 1 || num === 4) return false;
  const temp = Math.ceil(Math.sqrt(num));
  for (let i = 2; i < temp; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// 链地址法-拉链法
export class HashTable {
  buckets: Bucket[] = [];
  count = 0;
  //质数
  limit = 17;
  // TODO: keep track of all actual keys in a fast war?
  // keys = {}

  minLoadFactor = 0.25;
  loadFactor = 0.75;

  put(key, value) {
    // 1. get hash
    const index = this.hashFn(key);
    // 2. get bucket
    let bucket = this.buckets[index];
    //  3. should create bucket?
    if (!bucket) {
      bucket = [];
      this.buckets[index] = bucket;
    }

    // 4. should update
    for (const tuple of bucket) {
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    // 5. create
    bucket.push([key, value]);
    this.count++;

    // should resize
    if (this.count / this.limit > this.loadFactor) {
      this.resize(this.getPrime(this.limit * 2));
    }
  }
  get(key) {
    const index = this.hashFn(key);
    const bucket = this.buckets[index];
    if (!bucket) return null;

    for (const tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  }
  remove(key) {
    const index = this.hashFn(key);
    const bucket = this.buckets[index];
    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.count--;

        if (this.count / this.limit < this.minLoadFactor) {
          this.resize(this.getPrime(this.limit / 2));
        }
        return true;
      }
    }
    return false;
  }

  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() === 0;
  }
  resize(limit: number) {
    if (this.limit === limit) {
      return;
    }
    const oldBuckets = this.buckets;
    this.buckets = [];
    this.limit = limit;
    this.count = 0;

    oldBuckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach((tuple) => {
          this.put(...tuple);
        });
      }
    });
  }

  hashFn(str, limit = this.limit) {
    // 自己采用的一个质数（无强制要求，质数即可）
    const PRIME = 73;
    let hashCode = 0;
    let item;
    // 霍纳法则（秦九韶算法），计算 hashCode 的值
    for (item of str) {
      hashCode = PRIME * hashCode + item.charCodeAt();
    }

    return hashCode % limit;
  }
  getPrime(num) {
    num = Math.floor(num);
    while (!isPrime(num)) {
      num++;
    }
    return num;
  }
}
