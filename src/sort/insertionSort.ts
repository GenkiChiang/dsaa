import { defaultCompareFn } from "./defaultCompareFn";

export const insertionSort = (arr: number[], compareFn = defaultCompareFn) => {
  const length = arr.length;
  let i, j;
  let tempValue;

  for (i = 1; i < length; i++) {
    tempValue = arr[i];
    j = i;
    while (j > 0 && defaultCompareFn(arr[j - 1], tempValue) > 0) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = tempValue;
  }

  return arr;
};
