import { Queue } from "../src";
import { randomString } from "../src";

it("test Queue", () => {
  const queue = new Queue();
  const [str1, str2, str3] = [randomString(), randomString(), randomString()];

  expect(queue.size()).toEqual(0);
  expect(queue.top()).toBeNull();
  expect(queue.isEmpty()).toBeTruthy();

  queue.enQueue(str1);
  queue.enQueue(str2);
  queue.enQueue(str3);

  expect(queue.isEmpty()).toBeFalsy();
  expect(queue.size()).toEqual(3);
  expect(queue.top()).toEqual(str1);
  expect(queue.deQueue()).toEqual(str1);
  expect(queue.size()).toEqual(2);
  expect(queue.deQueue()).toEqual(str2);

  queue.clear();
  expect(queue.isEmpty()).toBeTruthy();
});
