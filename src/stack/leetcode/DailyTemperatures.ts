import { Stack } from "../Stack";

// 每日温度
//
// 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
//
//
// 示例 1:
//
// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:
// //
// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:
//
// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]
//
//
// 提示：
//
// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

export const dailyTemperaturesBasedLoop = (temperatures: number[]): number[] => {
  const size = temperatures.length;
  const answer = [];
  let value;
  let index = 0;
  let nextValue;
  let nextIndex;

  while (index < size) {
    value = temperatures[index];
    nextIndex = index;
    nextValue = value;

    while (nextValue <= value) {
      if (nextIndex + 1 >= size) {
        break;
      }
      nextIndex++;
      nextValue = temperatures[nextIndex];
    }

    if (nextValue > value) {
      const laterDay = nextIndex - index;
      value = nextValue;
      answer.push(laterDay);
    } else {
      answer.push(0);
    }

    index++;
  }

  return answer;
};

export const dailyTemperaturesBasedStack = (temperatures: number[]) => {
  const stack = new Stack<number>();
  const size = temperatures.length;
  const answer = new Array(size).fill(0);
  let index = 0;
  while (index < size) {
    while (
      !stack.isEmpty() &&
      temperatures[index] > temperatures[stack.top()]
    ) {
      answer[stack.top()] = index - stack.pop();
    }

    stack.push(index);
    index++;
  }
  return answer;
};
