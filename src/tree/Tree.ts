// 二叉树
export type BinaryTreeNode<T = any> = {
  value: T;
  left: BinaryTreeNode<T>;
  right: BinaryTreeNode<T>;
};
