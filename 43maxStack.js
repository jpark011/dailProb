// Implement a stack that has the following methods:

// push(val), which pushes an element onto the stack
// pop(), which pops off and returns the topmost element of the stack.If there are no elements in the stack, then it should throw an error or return null.
// max(), which returns the maximum value in the stack currently.If there are no elements in the stack, then it should throw an error or return null.
// Each method should run in constant time.


class MaxStack {
    constructor () {
        this.stack = [];
        this.trackStack = [];
    }

    push(val) {
        this.stack.push(val);
        let trackVal = val;
        if ( this.stack.length ) {
            let last = this.trackStack[this.trackStack.length - 1];
            if ( val < last ) 
                trackVal = last;
        } 
        this.trackStack.push(trackVal);
    }

    pop() {
        if ( this.stack.length ) {
            this.trackStack.pop();
            return this.stack.pop();
        } else {
            return null;
        }
    }

    max() {
        return this.trackStack[this.trackStack.length - 1];
    }
}