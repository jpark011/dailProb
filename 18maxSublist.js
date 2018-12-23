function* maxSublist( list, k ) {
    let max = Number.MIN_VALUE;
    let kList = [];
    for ( let i = 0; i < k; i++ ) {
        kList.push( list[i] );
    }
    yield findMax(kList);

    for ( let i = 0; i + k < list.length; i++ ) {
        kList.shift();
        kList.push( list[i+k] );
        yield findMax(kList);
    }
}

function findMax( list ) {
    return list.reduce( ( acc, val ) => acc < val? val : acc, Number.MIN_VALUE );
}
