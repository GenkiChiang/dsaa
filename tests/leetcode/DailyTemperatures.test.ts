import { dailyTemperaturesBasedLoop, dailyTemperaturesBasedStack } from "../../src";

const testCase = {
  entry: [73, 74, 75, 71, 69, 72, 76, 73],
  output: [1, 1, 4, 2, 1, 1, 0, 0],
};
it("test dailyTemperatures", () => {
  expect(dailyTemperaturesBasedLoop(testCase.entry)).toEqual(testCase.output);

  expect(dailyTemperaturesBasedStack(testCase.entry)).toEqual(testCase.output);
});
