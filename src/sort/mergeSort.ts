import { defaultCompareFn } from "./defaultCompareFn";

const merge = (left: number[], right: number[]) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.unshift());
    } else {
      result.push(left.unshift());
    }
  }

  if (left.length) {
    result.push(...left);
  }
  if (right.length) {
    result.push(...right);
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

  return merge(mergeSort(left), mergeSort(right));
};
