import { Stack } from "../Stack";
// 栈的最小值
// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
//
//
//
// 示例:
//
//     MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.min();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.min();   --> 返回 -2.
//
//
// 提示：
//
// 各函数的调用总次数不超过 20000 次

export class MinStack extends Stack<number> {
  private minStack = new Stack<number>();

  constructor() {
    super();
  }
  push(item: number) {
    super.push(item);

    if (this.minStack.isEmpty() || this.min() >= item) {
      this.minStack.push(item);
    }
  }

  pop(): number {
    if (this.isEmpty()) {
      return;
    }
    const temp = super.pop();
    if (this.minStack.top() === temp) {
      this.minStack.pop();
    }
    return temp;
  }

  clear() {
    super.clear();
    this.minStack.clear();
  }

  min(): number {
    return this.minStack.top();
  }
}
