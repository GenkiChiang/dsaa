import type { BinaryTreeNode } from "../Tree";
import { preorder } from "../preorder";

// https://leetcode.cn/problems/binary-tree-preorder-traversal/submissions/

const preorderTraversal = (root: BinaryTreeNode) => {
  const result = [];

  preorder(root, (current) => {
    // @ts-ignore
    result.push(current.val);
  });

  return result;
};
