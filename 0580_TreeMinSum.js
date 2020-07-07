class Tree {
    val;
    left;
    right;
}

function minSumTree(tree) {
    if (tree === null) {
        return 0;
    } else {
        return Math.min(minSumTree(tree.left), minSumTree(tree.right));
    }
}