class Node {
    constructor( value, left=null, right=null ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    static get DELIM() {
        return '#';
    }

    serialize() {
        let ret = '';
        if ( this.left !== null ) {
            ret += this.left.serialize();
            ret += Node.DELIM;
        }
        ret += this.value;
        if ( this.right !== null ) {
            ret += Node.DELIM;
            ret += this.right.serialize();
        }
        return ret;
    }
}
