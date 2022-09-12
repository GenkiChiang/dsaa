import { swap } from "./utils";

const partition = (arr: number[], left, right) => {
  // 分区操作
  let pivot = left,
    index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
};

export  const quickSort = (arr, left, right) => {
  const length = arr.length;
  let partitionIndex;
  left = typeof left !== "number" ? 0 : left;
  right = typeof right !== "number" ? length - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};
