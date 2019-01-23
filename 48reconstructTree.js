// Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.

// For example, given the following preorder traversal:

// [a, b, d, e, c, f, g]

// And the following inorder traversal:

// [d, b, e, a, f, c, g]

// You should return the following tree:

//     a
//    / \
//   b   c
//  / \ / \
// d  e f  g

function reconstruct( preorder, inorder ) {
    if ( preorder.length === 0 || inorder.length === 0 ) {
        return null;
    }

    let root = preorder[0];
    let newNode = new Node(root);
    let rootIndex = undefined;
    for ( let i = 0; i < inorder.length; i++ ) {
        if ( inorder[i] === root ) {
            rootIndex = i;
            break;
        }
    }

    let maxLeftEndIndex = Number.MIN_VALUE;
    for ( let i = 0; i < rootIndex; i++ ) {
        for ( let j = 1; j < preorder.length; j++ ) {
            if ( inorder[i] === preorder[j] && maxLeftEndIndex < j ) {
                maxLeftEndIndex = j;
            }
        }
    }

    newNode.left = reconstruct( preorder.slice(1, maxLeftEndIndex + 1), inorder.slice(0, rootIndex) );
    newNode.right = reconstruct( preorder.slice(maxLeftEndIndex + 1), inorder.slice(rootIndex + 1) );
    return newNode;
}
