enum Compare {
  BIGGER_THAN = 1,
  LESS_THAN = -1,
  EQUAL = 0,
}

export const defaultCompareFn = (a, b) => {
  if (a === b) {
    return Compare.EQUAL;
  }
  return a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN;
};
export const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
