/**
 * 二叉树遍历：后序遍历
 */

// 后序遍历: 递归
import { Stack } from "../stack";
import { BinaryTreeNode } from "./Tree";

export const postorderForEach = (
  root: BinaryTreeNode,
  callback: (current: BinaryTreeNode) => void
) => {
  if (root === null) {
    return;
  }
  postorderForEach(root.left, callback);
  postorderForEach(root.right, callback);
  callback(root);
};

// 后序遍历：循环实现(翻转结果)
export const postorderForEachLoopReverseImpl = (
  root: BinaryTreeNode,
  callback: (current: BinaryTreeNode) => void
) => {
  if (root === null) {
    return;
  }

  const stack = new Stack();
  const reverseList = [];
  let current = root;
  while (current || stack.size()) {
    while (current) {
      reverseList.push(current);
      if (current.left) {
        stack.push(current.left);
      }

      current = current.right;
    }

    current = stack.pop();
  }
  reverseList.reverse().forEach((value) => callback(value));
};

// 后序遍历：循环实现
export const postorderForEachLoopImpl = (
  root: BinaryTreeNode,
  callback: (current: BinaryTreeNode) => void
) => {
  if (root === null) {
    return;
  }

  const stack = new Stack<BinaryTreeNode>();
  stack.push(root);
  let lastPop = root;
  let current: BinaryTreeNode;
  while (stack.size()) {
    current = stack.top();

    if (current.left && current.left !== lastPop && current.right !== lastPop) {
      stack.push(current.left);
      continue;
    }
    if (current.right && current.right !== lastPop) {
      stack.push(current.right);
      continue;
    }

    lastPop = stack.pop();
    callback(lastPop);
  }
};

export const postorder = postorderForEach;
