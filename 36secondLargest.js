class Node {
    constructor (data , left = null, right = null ) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function secondBiggest( bst ) {
    let curNode = bst;
    let prevNode;

    while ( curNode.right !== null ) {
        prevNode = curNode;
        curNode = curNode.right;
    }
    
    return prevNode;
}