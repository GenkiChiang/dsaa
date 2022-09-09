import { preorder } from "./preorder";
import {TreeNode} from "./types";

// https://leetcode.cn/problems/binary-tree-preorder-traversal/submissions/

const preorderTraversal = (root: TreeNode) => {
  const result = [];

  preorder(root, (current) => {
    result.push(current.val);
  });

  return result;
};
