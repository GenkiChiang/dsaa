import { randomNumberList } from "../../src/utils";
import { selectionSort } from "../../src/sort/selectionSort";

const input = randomNumberList(20, 1_000);
const ascOutput = [...input].sort((a, b) => a - b);
const descOutput = [...input].sort((a, b) => b - a);

it("test mergeSort", function () {
  expect(selectionSort(input)).toEqual(ascOutput);
  expect(selectionSort(input, (a, b) => b - a)).toEqual(descOutput);
});
