const MAX = 1000;
function estimatePI() {
    const totalPts = MAX * MAX;
    let inbounds = 0;

    // (i, j) is a point
    for ( let i = 0; i < MAX; i++ ) {
        for ( let j = 0; j < MAX; j++ ) {
            if ( isWithin( MAX / 2, i, j ) ) {
                inbounds++;
            }
        }
    }

    return 4 * inbounds / totalPts;
}

function isWithin( r, x, y ) {
    const newX = x - MAX / 2;
    const newY = y - MAX / 2;

    const lhs = Math.sqrt( (newX * newX) + (newY * newY) );
    return lhs <= r;
}
