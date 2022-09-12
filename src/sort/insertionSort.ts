import { defaultCompareFn } from "./utils";

export const insertionSort = (arr: number[], compareFn = defaultCompareFn) => {
  const length = arr.length;
  let i, j;
  let temp;

  for (i = 1; i < length; i++) {
    temp = arr[i];
    j = i;
    while (j > 0 && compareFn(arr[j - 1], temp) > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  return arr;
};
