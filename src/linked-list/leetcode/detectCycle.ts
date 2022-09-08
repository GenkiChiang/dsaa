import { LinkedNode } from "../LinkedList";

// https://leetcode.cn/problems/linked-list-cycle-lcci/
// 快慢指针法的 数学公式推导基础
// a + (nb + nc + c) = 2(a + b)  =======> a = (n - 1)(b + c) + c
export const detectCycle = (head: LinkedNode) => {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let pointer = head;
      while (pointer !== slow) {
        pointer = pointer.next;
        slow = slow.next;
      }

      return pointer;
    }
  }

  return null;
};
