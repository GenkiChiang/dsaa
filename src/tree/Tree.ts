// 二叉树

class Node<T = any> {
  value: T;
  left: Node<T>;
  right: Node<T>;
  constructor(value: T) {
    this.value = value;
  }
}

export class BinarySearchTree {
  root: Node;
  constructor() {}

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root: Node, node: Node) {
    if (root.value > node) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  remove(value) {}

  //----------------------------------
  // 二叉树遍历
  //----------------------------------
  preorder(root: Node, callback: (current: Node) => void) {
    if (root === null) {
      return;
    }
    callback(root);
    this.preorder(root.left, callback);
    this.preorder(root.right, callback);
  }
  inorder(root: Node, callback: (current: Node) => void) {
    if (root === null) {
      return;
    }
    this.inorder(root.left, callback);
    callback(root);
    this.inorder(root.right, callback);
  }
  postorder(root: Node, callback: (current: Node) => void) {
    if (root === null) {
      return;
    }
    this.postorder(root.left, callback);
    this.postorder(root.right, callback);
    callback(root);
  }

  max() {
    let node = this.root;
    if (!node) {
      return null;
    }
    while (node !== null) {
      node = node.right;
    }
    return node;
  }
  min() {
    let node = this.root;
    if (!node) {
      return null;
    }
    while (node !== null) {
      node = node.left;
    }
    return node;
  }
}
