import { defaultCompareFn } from "./defaultCompareFn";

const shellSort = (arr: number[], compareFn = defaultCompareFn) => {
  const length = arr.length;
  let temp,
    gap = 1,
    i,
    j;
  while (gap < length / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (i = gap; i < length; i++) {
      temp = arr[i];
      for (j = i - gap; j >= 0 && compareFn(arr[j], temp) > 0; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
};
