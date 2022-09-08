import { LinkedNode } from "../LinkedList";

// https://leetcode.cn/problems/UHnkqh/
export const invertLinkedList = <T = any>(head: LinkedNode<T>) => {
  let current = head;
  let prev = null;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }
  return prev;
};
export const reverseList = invertLinkedList;

// 递归实现
export const invertLinkedListBasedRecursive = <T = any>(
  head: LinkedNode<T>
) => {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = invertLinkedListBasedRecursive(head.next);
  // 第一次执行到这里的为倒数第二个节点
  const current = head;
  const next = head.next;

  next.next = current;
  current.next = null;

  return newHead;
};
