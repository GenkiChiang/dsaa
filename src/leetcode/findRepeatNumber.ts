import { _random } from "../utils";

function findRepeatNumber(nums: number[]): number {
  const map = new Map();
  const repeatArray = [];
  nums.forEach((value) => {
    const statTime: number = map.get(value);
    if (!statTime) {
      map.set(value, 1);
      return;
    }
    if (statTime > 2) {
      return;
    }
    map.set(value, statTime + 1);
    repeatArray.push(value);
  });
  if (repeatArray.length === 0) {
    return;
  }
  return repeatArray[_random(0, repeatArray.length - 1)];
}
