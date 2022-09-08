import type { TreeNode } from "../Tree";
import { preorder } from "../preorder";

// https://leetcode.cn/problems/binary-tree-preorder-traversal/submissions/

const preorderTraversal = (root: TreeNode) => {
  const result = [];

  preorder(root, (current) => {
    result.push(current.val);
  });

  return result;
};
