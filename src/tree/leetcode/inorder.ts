/**
 * 二叉树遍历：中序遍历
 * 已通过测试https://leetcode.cn/problems/binary-tree-inorder-traversal/submissions/
 */

// 中序遍历: 递归
import { Stack } from "../../stack";
import {TreeNode} from "./types";

export const inorderForEach = (
  root: TreeNode,
  callback: (current: TreeNode) => void
) => {
  if (root === null) {
    return;
  }
  inorderForEach(root.left, callback);
  callback(root);
  inorderForEach(root.right, callback);
};
// 中序遍历：循环实现
export const inorderForEachLoopImpl = (
  root: TreeNode,
  callback: (current: TreeNode) => void
) => {
  if (root === null) {
    return;
  }

  const stack = new Stack();
  let current = root;
  while (current || !stack.isEmpty()) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    callback(current);
    current = current.right;
  }
};

export const inorder = inorderForEach;
