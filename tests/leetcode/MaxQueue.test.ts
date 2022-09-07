import { MaxQueue } from "../../src/queue/leetcode/MaxQueue";

const testCase = {
  action: [
    "MaxQueue",
    "pop_front",
    "pop_front",
    "pop_front",
    "pop_front",
    "pop_front",
    "push_back",
    "max_value",
    "push_back",
    "max_value",
  ],
  input: [[], [], [], [], [], [], [15], [], [9], []],
};

it("test MaxQueue", () => {
  const maxQueue = new MaxQueue();

  maxQueue.pop_front();
  maxQueue.pop_front();
  maxQueue.pop_front();
  maxQueue.pop_front();
  maxQueue.pop_front();

  maxQueue.push_back(15);
  expect(maxQueue.max_value()).toEqual(15);
  maxQueue.push_back(9);
  expect(maxQueue.max_value()).toEqual(15);
});
