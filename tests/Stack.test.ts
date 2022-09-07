import { Stack } from "../src";
import { randomNumber, randomString } from "../src/utils";

it("test stack", () => {
  const stack = new Stack();
  expect(stack.size()).toEqual(0);
  expect(stack.top()).toBeNull();
  expect(stack.empty()).toBeTruthy();

  const str = randomString();
  const num = randomNumber();

  stack.push(str);
  stack.push(num);

  expect(stack.empty()).toBeFalsy();
  expect(stack.size()).toEqual(2);
  expect(stack.pop()).toEqual(num);
  expect(stack.pop()).toEqual(str);
  expect(stack.size()).toEqual(0);

  stack.push(str);
  stack.clear();
  expect(stack.empty()).toBeTruthy();
});
