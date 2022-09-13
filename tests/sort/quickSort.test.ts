import { randomNumberList } from "../../src";
import { quickSort } from "../../src";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test quickSort", function () {
  expect(quickSort([...input], null, null)).toEqual(ascOutput);
});
