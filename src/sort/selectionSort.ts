import { defaultCompareFn } from "./defaultCompareFn";

export const selectionSort = (arr: number[], compareFn = defaultCompareFn) => {
  const length = arr.length;
  let i, j, minIndex;

  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < length; j++) {
      if (compareFn(arr[minIndex], arr[j]) > 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};
