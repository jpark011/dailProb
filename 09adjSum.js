function maxAdjSum( list ) {
    let incl = list[0];
    let excl = 0;
    let tempExcl = 0;

    for ( let i = 1; i < list.length; i++ ) {
        tempExcl = Math.max( incl, excl );

        incl = excl + list[i];
        excl = tempExcl;
    }

    return ( incl < excl )? excl : incl;
}