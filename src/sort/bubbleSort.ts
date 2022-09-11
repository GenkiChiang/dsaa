import { defaultCompareFn } from "./defaultCompareFn";

export const bubbleSort = (arr: number[], compareFn = defaultCompareFn) => {
  const length = arr.length;
  let i, j;
  // optimized: when no swap break
  let flag;

  for (i = 0; i < length - 1; i++) {
    flag = true;
    for (j = i; j < length - 1 - i; j++) {
      if (compareFn(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = false;
      }
    }
    if (flag === true) {
      break;
    }
  }
  return arr;
};
