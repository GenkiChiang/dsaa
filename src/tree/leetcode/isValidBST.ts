import { TreeNode } from "../Tree";
import { inorderForEach } from "../inorder";
// https://leetcode.cn/problems/validate-binary-search-tree/submissions/
const dfs = (node: TreeNode, lower, upper) => {
  if (node === null) {
    return true;
  }

  if (node.val >= upper || node.val <= lower) {
    return false;
  }

  return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
};

const isValidBST = (node: TreeNode) => dfs(node, -Infinity, +Infinity);

// 2. 利用中序遍历
const isValidBSTInorderImpl = (node: TreeNode) => {
  let isValid = true;
  let prev = -Infinity;
  inorderForEach(node, (current) => {
    if (!isValid) return;
    if (current.val <= prev) {
      isValid = false;
    }

    prev = current.val;
  });
  return isValid;
};

