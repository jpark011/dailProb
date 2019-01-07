function editDistance( s1, s2 ) {
    let longer = ( s1.length < s2.length )? s2.length : s1.length;
    let shorter = ( s1.length < s2.length )? s1.length : s2.length;
    let minCost = compare( shorter, longer );

    for ( let i = 1; i + shorter.length <= longer.length; i++ ) {
        let cost = i + editDistance( longer.substr(i), shorter );
        if ( cost < minCost ) {
            minCost = cost; 
        }
    }

    return minCost;
}

function compare( shorter, longer ) {
    let cost = longer.length - shorter.length;

    for ( let i = 0; i < shorter.length; i++ ) {
        if ( shorter[i] !== longer[i] ) {
            cost++;
        }
    }
    return cost;
}