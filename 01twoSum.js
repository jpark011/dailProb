function twoNum( list, k ) {
    let hashMap = new Map();

    for ( let i = 0; i < list.length; i++ ) {
        if ( !hashMap.has(list[i]) ) {
            hashMap.set( list[i], 0 );
        }

        hashMap.set(list[i], hashMap.get(list[i]) + 1);
    }

    for ( let i = 0; i < list.length; i++ ) {
        let rest = k - list[i];

        if ( hashMap.has(rest) && 0 < hashMap.get(rest) ) {
            return true;
        }
    }
    return false;
}
