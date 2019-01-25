// Suppose an arithmetic expression is given as a binary tree.Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.

// For example, given the following tree:

//     *
//     / \
//     + +
//     / \  / \
// 3  2  4  5
// You should return 45, as it is(3 + 2) * (4 + 5).

function eval( node ) {
    if ( node.left === null && node.right === null ) {
        return node.value;
    }
    let left = eval(node.left);
    let right = eval(node.right);
    
    switch ( node.value ) {
        case '+':
            return left + right;       
        case '-':
            return left - right;       
        case '*':
            return left * right;       
        case '/':
            return left / right;
        default:
            return undefined;
    }
}
