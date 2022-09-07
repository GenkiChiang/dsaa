import { randomString } from "../src/utils";
import { Deque } from "../src/queue/Deque";

it("test Deque", () => {
  const queue = new Deque();
  const [str1, str2, str3] = [randomString(), randomString(), randomString()];

  expect(queue.size()).toEqual(0);
  expect(queue.frontTop()).toBeNull();
  expect(queue.backTop()).toBeNull();
  expect(queue.isEmpty()).toBeTruthy();

  queue.addFront(str1);
  queue.addBack(str2);
  queue.addFront(str3);

  expect(queue.isEmpty()).toBeFalsy();
  expect(queue.size()).toEqual(3);
  expect(queue.frontTop()).toEqual(str3);
  expect(queue.backTop()).toEqual(str2);
  expect(queue.removeFront()).toEqual(str3);
  expect(queue.frontTop()).toEqual(str1);
  expect(queue.removeBack()).toEqual(str2);
  expect(queue.backTop()).toEqual(str1);
  expect(queue.size()).toEqual(1);

  queue.clear();
  expect(queue.isEmpty()).toBeTruthy();
});
