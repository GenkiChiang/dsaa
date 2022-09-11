enum Compare {
  BIGGER_THAN = 1,
  LESS_THAN = -1,
  EQUAL = 0,
}

export const defaultCompareFn = (a, b) => {
  if (a > b) {
    return Compare.BIGGER_THAN;
  } else if (a < b) {
    return Compare.LESS_THAN;
  } else {

    return Compare.EQUAL;
  }
};
