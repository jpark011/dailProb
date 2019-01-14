function getPowerset( list ) {
    const length = list.length;
    let ret = [];
    ret.push([]);
    for ( let i = 1; i <= length; i++ ) {
        for ( let j = 0; j < length; j++ ) {        // n choose k instead of length
            let tmp = [];
            for ( let k = 0; k < i; k++ ) {
                let index = ( j + k ) % length;
                tmp.push( list[ index ] );
            }
            ret.push( tmp );
        }
    }
    return ret;
}