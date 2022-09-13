import { randomNumberList } from "../../src";
import { shellSort } from "../../src";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test shellSort", function () {
  expect(shellSort(input)).toEqual(ascOutput);
  expect(shellSort(input, (a, b) => b - a)).toEqual(descOutput);
});
