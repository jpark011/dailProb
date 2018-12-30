class Node {
    constructor ( data, left = null, right = null ) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.locked = false;
    }

    is_locked() {
        let ret = this.is_locked;

        if ( left !== null ) {
            ret &= this.left.is_locked();
        }
        
        if ( right !== null ) {
            ret &= this.right.is_locked();
        }

        return this.is_locked && 
            ( left === null || this.left.is_locked() ) &&
            ( right === null || this.right.is_locked() );
    }

    lock() {
        if ( !this.left.is_locked() && !this.right.is_locked() ) {
            this.locked = true;
            return true;
        }
        return false;
    }
    
    unlock() {
        if ( !this.left.is_locked() && !this.right.is_locked() ) {
            this.locked = false;
            return true;
        }
        return false;
    }
}