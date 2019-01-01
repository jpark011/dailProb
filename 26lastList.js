class Node {
    constructor ( data, prev = null, next = null ) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }

}

class LastList {
    constructor () {
        this.last = null;
    }

    push( data ) {
        if ( this.last === null ) {
            this.last = new Node( data );
        } else {
            this.last.next = new Node( data );
            this.last = this.last.next;
        }
    }

    getLast( k ) {
        let ret = this.last;
        for ( let i = 0; i < k; i++ ) {
            ret = ret.prev;
        }
        return ret;
    }
}
