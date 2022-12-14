import { LinkedNode } from "../LinkedList";

// 快慢指针法的 数学公式推导基础
// a + (nb + nc + c) = 2(a + b)  =======> a = (n - 1)(b + c) + c
export const hasCycle = (head: LinkedNode) => {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

