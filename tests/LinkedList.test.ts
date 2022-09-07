import { LinkedList } from "../src";
import { randomString } from "../src/utils";

it("test LinkedList", () => {
  const linkedList = new LinkedList<string>();

  const [str1, str2, str3] = [randomString(), randomString(), randomString()];

  expect(linkedList.size()).toEqual(0);
  expect(linkedList.getFirst()).toBeNull();
  expect(linkedList.getLast()).toBeNull();
  expect(linkedList.isEmpty()).toBeTruthy();

  linkedList.push(str1);
  linkedList.unshift(str2);
  // [str2,str1]
  linkedList.insertAt(str3, 1);
  // [str2,st3,st1]

  expect(linkedList.getFirst().value).toEqual(str2);
  expect(linkedList.getLast().value).toEqual(str1);
  expect(linkedList.getAt(1).value).toEqual(str3);
  expect(linkedList.size()).toEqual(3);
  expect(linkedList.isEmpty()).toBeFalsy();

  //
  expect(linkedList.pop().value).toEqual(str1);
  expect(linkedList.getLast().value).toEqual(str3);
  expect(linkedList.shift().value).toEqual(str2);
  expect(linkedList.getFirst().value).toEqual(str3);
  expect(linkedList.size()).toEqual(1);

  expect(linkedList.removeAt(0).value).toEqual(str3);

  linkedList.push(str1);

  linkedList.clear();
  expect(linkedList.isEmpty()).toBeTruthy();
  expect(linkedList.size()).toEqual(0);
});
