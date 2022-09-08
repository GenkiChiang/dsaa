import { preorderForEach, TreeNode } from "../Tree";

// https://leetcode.cn/problems/binary-tree-preorder-traversal/submissions/

const preorderTraversal = (root: TreeNode) => {
  const result = [];

  preorderForEach(root, (current) => {
    // @ts-ignore
    result.push(current.val);
  });

  return result;
};
