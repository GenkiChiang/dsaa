import { MinStack, Stack } from "../src";
import { randomNumber, randomString } from "../src/utils";

it("test stack", () => {
  const stack = new Stack();
  expect(stack.size()).toEqual(0);
  expect(stack.top()).toBeNull();
  expect(stack.isEmpty()).toBeTruthy();

  const str = randomString();
  const num = randomNumber();

  stack.push(str);
  stack.push(num);

  expect(stack.isEmpty()).toBeFalsy();
  expect(stack.size()).toEqual(2);
  expect(stack.pop()).toEqual(num);
  expect(stack.pop()).toEqual(str);
  expect(stack.size()).toEqual(0);

  stack.push(str);
  stack.clear();
  expect(stack.isEmpty()).toBeTruthy();
});

it("test minStack", () => {
  const minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);

  expect(minStack.min()).toEqual(-3);
  expect(minStack.pop()).toEqual(-3);
  expect(minStack.top()).toEqual(0);
  expect(minStack.min()).toEqual(-2);
});
