import { defaultCompareFn } from "./utils";

const merge = (left: number[], right: number[], compareFn) => {
  const result = [];

  while (left.length && right.length) {
    if (compareFn(left[0], right[0]) > 0) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

export const mergeSort = (arr: number[], compareFn = defaultCompareFn) => {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }

  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(
    mergeSort(left, compareFn),
    mergeSort(right, compareFn),
    compareFn
  );
};
