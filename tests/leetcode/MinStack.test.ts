import {MinStack} from "../../src";


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
