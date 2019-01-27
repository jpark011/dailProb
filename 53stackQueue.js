// Implement a queue using two stacks.Recall that a queue is a FIFO(first -in, first - out) data structure with the following methods: enqueue, which inserts an element into the queue, and dequeue, which removes it.

class StackQueue {
    constructor() {
        this.mainStack = [];
        this.tmpStack = [];
    }

    enqueue(ele) {
        this.mainStack.push(ele);
    }

    dequeue() {
        while (0 < this.mainStack.length) {
            let ele = this.mainStack.pop();
            this.tmpStack.push(ele);
        }
        this.tmpStack.pop();
        while (0 < this.tmpStack.length) {
            let ele = this.tmpStack.pop();
            this.mainStack.push(ele);
        }
    }
}