export type TreeNode<T = any> = {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
};

// 前序遍历
export const preorderForEach = (
  root: TreeNode,
  callback: (current: TreeNode) => void
) => {
  if (root === null) {
    return;
  }
  callback(root);
  preorderForEach(root.left, callback);
  preorderForEach(root.right, callback);
};

// 中序遍历
export const inorderForEach = (
  root: TreeNode,
  callback: (current: TreeNode) => void
) => {
  if (root === null) {
    return;
  }
  callback(root);
  inorderForEach(root.left, callback);
  inorderForEach(root.right, callback);
};

// 后序遍历
export const postorderForEach = (
  root: TreeNode,
  callback: (current: TreeNode) => void
) => {
  if (root === null) {
    return;
  }
  postorderForEach(root.left, callback);
  postorderForEach(root.right, callback);
  callback(root);
};
