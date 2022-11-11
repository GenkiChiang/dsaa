import { randomNumberList } from "../../src";
import { insertionSort } from "../../src";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test insertionSort", function () {
  expect(insertionSort([...input])).toEqual(ascOutput);
  expect(insertionSort([...input], (a, b) => b - a)).toEqual(descOutput);
});