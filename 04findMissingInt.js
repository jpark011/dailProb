function sumBetween( start, end ) {
    return ( end * ( end + 1 ) / 2 ) - ( start * ( start - 1 ) / 2 );
}

function findMissingInt( list ) {
    let minInt = Number.MAX_VALUE;
    let maxInt = Number.MIN_VALUE;
    let intSum = 0;

    for ( num in list ) {
        if ( 0 < num ) {
            if ( num < minInt ) minInt = num;
            if ( maxInt < num ) maxInt = num;
            intSum += num;
        }
    }

    let totalSum = sumBetween(minInt, maxInt); 
    if ( totalSum === intSum ) {
        return maxInt + 1;
    } else {
        return totalSum - intSum;
    }
}
