import { Stack } from "./stack";

export class MinStack extends Stack<number> {
  private minStack = new Stack<number>();

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
