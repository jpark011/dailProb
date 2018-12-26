class Node {
    constructor( val, next = null ) {
        this.val = val;
        this.next = next;
    }

    get length() {
        let len = 0;
        let curr = this;
        while ( curr !== null ) {
            len++;
            curr = curr.next;
        }
        return len;
    }
}

function getIntersetion( list1, list2 ) {
    let len1 = list1.length;
    let len2 = list2.length;
    let diff = Math.abs( len2 - len1 );

    return (len1 < len2) ? getIntersetionHelper(list2, list1, diff) : getIntersetionHelper(list1, list2, diff);
}

function getIntersetionHelper( biggerList, smallerList, diff ) {
    let ptrBigger = biggerList;
    let ptrSmaller = smallerList;

    for ( let i = 0; i < diff; i++ ) {
        ptrBigger = ptrBigger.next;
    }

    while ( ptrBigger !== null && ptrSmaller !== null ) {
        if ( ptrBigger === ptrSmaller )
            return ptrBigger.val;
        ptrBigger = ptrBigger.next;
        ptrSmaller = ptrSmaller.next;
    }
    throw 1;
}
