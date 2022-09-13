import { randomNumberList } from "../../src";
import { mergeSort } from "../../src";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test mergeSort", function () {
  expect(mergeSort([...input])).toEqual(ascOutput);
  expect(mergeSort([...input], (a, b) => b - a)).toEqual(descOutput);
});
