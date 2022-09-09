export const minOperations = (logs: string[]): number => {
  let min = 0;

  logs.forEach((log) => {
    if (log === "../") {
      if (min !== 0) {
        min--;
      }
    } else if (log === "./") {
    } else {
      min++;
    }
  });
  return min;
};


