import { Queue } from "../Queue";
import { Deque } from "../Deque";

// 队列的最大值
//
// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front 的均摊时间复杂度都是O(1)。
//
// 若队列为空，pop_front 和 max_value 需要返回 -1
//
// 示例 1：
//
// 输入:
//     ["MaxQueue","push_back","push_back","max_value","pop_front","max_value"]
//         [[],[1],[2],[],[],[]]
// 输出: [null,null,null,2,1,2]
// 示例 2：
//
// 输入:
//     ["MaxQueue","pop_front","max_value"]
//         [[],[],[]]
// 输出: [null,-1,-1]
//
//
// 限制：
//
// 1 <= push_back,pop_front,max_value的总操作数 <= 10000
// 1 <= value <= 10^5
//

export class MaxQueue extends Queue<number> {
  deque = new Deque<number>();

  max_value(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.deque.frontTop();
  }
  push_back(value: number) {
    this.enQueue(value);

    let dequeMin = this.deque.backTop();

    while (value > dequeMin && !this.deque.isEmpty()) {
      dequeMin = this.deque.removeBack();
    }

    this.deque.addBack(value);
  }

  pop_front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    const temp = this.deQueue();

    const dequeMax = this.deque.frontTop();

    if (dequeMax === temp && !this.deque.isEmpty()) {
      this.deque.removeFront();
    }

    return temp;
  }
}
