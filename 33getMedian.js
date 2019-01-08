class Node {
    constructor ( data, next = null ) {
        this.data = data;
        this.next = next;
    }
}

class MedianList {
    constructor () {
        this.root = null;
        this.numNodes = 0;
    }

    insert ( data ) {
        let newNode = new Node( data );
        let ptr = this.root;

        while ( true ) {
            if ( ptr === null || data < ptr.next.data ) {
                let tmp = ptr.next;
                ptr.next = newNode;
                newNode.next = tmp;
                break;
            }
            ptr = ptr.next;
        }
        numNodes++;
    }

    getMedian() {
        let middle = Math.ceil( this.numNodes / 2 ) - 1;

        let median = this.root;
        for ( let i = 0; i < middle; i++ ) {
            median = median.next;
        }

        return ( this.numNodes & 1 )? median.data : (median.data + median.next.data) / 2;
    }
}

function findMedian( list ) {
    let list = new MedianList();

    for ( let n of list ) {
        list.insert( n );
        console.log(list.getMedian());
    }
}