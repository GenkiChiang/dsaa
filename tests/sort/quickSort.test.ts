import { randomNumberList } from "../../src/utils";
import { selectionSort } from "../../src/sort/selectionSort";
import { quickSort } from "../../src/sort/quickSort";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test quickSort", function () {
  expect(quickSort([...input], null, null)).toEqual(ascOutput);
});
