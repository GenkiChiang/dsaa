/**
 * 广度优先搜索算法 BFS(breadth-first search)
 */

import { TreeNode } from "../Tree";
import { Queue } from "../../queue";

// https://leetcode.cn/problems/binary-tree-level-order-traversal/submissions/
export const levelOrder = (root: TreeNode) => {
  if (root === null) {
    return [];
  }
  const result = [];
  const queue = new Queue<TreeNode>();
  queue.enQueue(root);
  let tempArray = [];

  while (queue.size()) {
    tempArray = [];
    const size = queue.size();
    for (let i = 0; i < size; i++) {
      let current = queue.deQueue();
      // @ts-ignore
      tempArray.push(current.val);

      if (current.left) {
        queue.enQueue(current.left);
      }
      if (current.right) {
        queue.enQueue(current.right);
      }
    }

    result.push(tempArray);
  }

  return result;
};
