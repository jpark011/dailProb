function cons( a, b ) {
    let pair = ( f ) => f( a, b );
    return pair;
}

function car( pair ) {
    return pair( (a, b) => a );
}

function cdr( pair ) {
    return pair((a, b) => b);
}
