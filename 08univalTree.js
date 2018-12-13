class Node {
    constructor ( value, left = null, right = null ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    isUnivalTree( initial = this.value ) {
        if ( this.value !== initial ) {
            return false;
        }

        let left = this.left === null || this.left.isUnivalTree( initial );
        let right = this.right === null || this.right.isUnivalTree( initial );

        return left && right;
    }

    countUnivalTree() {
        let left = ( this.left === null )? 0 : this.left.countUnivalTree();
        let right = ( this.right === null )? 0 : this.right.countUnivalTree();
        let count = left + right;
        
        if ( this.isUnivalTree( this.value ) ) {
            count++;
        }
        
        return count;
    }
}
