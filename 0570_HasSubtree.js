function hasSubtree(s, t) {
    if (isSubtree(s, t)) { 
        return true;
    } else {
        return isSubtree(s.left, t) || isSubtree(s.right, t);
    }

}

function isSubtree(s, t) {
    if (s.node === t.node) {
        return isSubtree(s.left, t) && isSubtree(s.right, t);
    } else {
        return false;
    }
}