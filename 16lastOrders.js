class Node {
    constructor( orderId, next = null ) {
        this.orderId = orderId;
        this.next = next;
    }
}

class NLog {
    constructor() {
        this.root = undefined;
        this.lastNode = undefined;
    }

    record( orderId ) {
        let newNode = new Node(orderId);
        if ( this.root === undefined ) {
            this.root = newNode;
        } else {
            this.lastNode.next = newNode;
        }
        this.lastNode = newNode;
    }

    getLast( i ) {
        let ptr = this.root;
        while ( 0 < i ) {
            ptr = ptr.next;
            i--;
        }
        return ptr;
    }
}
