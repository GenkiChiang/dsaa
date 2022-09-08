/**
 * 二叉树遍历：前序遍历
 */

// 前序遍历：递归实现
import { Stack } from "../stack";
import { BinaryTreeNode } from "./Tree";

export const preorderForEach = (
  root: BinaryTreeNode,
  callback: (current: BinaryTreeNode) => void
) => {
  if (root === null) {
    return;
  }
  callback(root);
  preorderForEach(root.left, callback);
  preorderForEach(root.right, callback);
};

// 前序遍历：循环实现
export const preorderForEachLoopImpl = (
  root: BinaryTreeNode,
  callback: (current: BinaryTreeNode) => void
) => {
  if (root === null) {
    return;
  }

  const stack = new Stack();
  let current = root;
  while (current || stack.size()) {
    while (current) {
      stack.push(current);
      callback(current);

      current = current.left;
    }

    current = stack.pop().right;
  }
};

export const preorder = preorderForEach;
