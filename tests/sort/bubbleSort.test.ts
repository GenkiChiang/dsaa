import { randomNumberList } from "../../src/utils";
import { bubbleSort } from "../../src/sort/bubbleSort";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test bubbleSort", function () {
  expect(bubbleSort([...input])).toEqual(ascOutput);
  expect(bubbleSort([...input], (a, b) => b - a)).toEqual(descOutput);
});
