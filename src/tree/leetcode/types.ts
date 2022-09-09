export class TreeNode<T = any> {
    val: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
    constructor(value:T) {
        this.val = value;
    }
}
