function findPath( M, start, end ) {
    let frontier = [];
    frontier.push( start );
    let cameFrom = [];
    cameFrom[start] = null;
    
    while ( 0 < frontier.length ) {
        let curr = frontier.shift();
        let neighbors = getNeighbors( M, ...curr );
        for ( const n of neighbors ) {
            if ( cameFrom[n] === undefined ) {
                cameFrom[n] = curr;
                frontier.push(n);
            }
        }
    }

    let curr = end;
    let d = 0;
    while ( curr !== start ) {
        d++;
        curr = cameFrom[end];
    }
    return d;
}

function getNeighbors( M, x, y ) {
    let neighbors = [];
    if ( 0 < x && !M[x-1][y] ) {
        neighbors.push( [x-1, y] );
    }
    if ( 0 < y && !M[x][y-1] ) {
        neighbors.push( [x, y-1] );
    }
    if ( x < M.length - 1 && !M[x+1][y] ) {
        neighbors.push( [x+1, y] );
    }
    if ( y < M.length && !M[x][y+1] ) {
        neighbors.push( [x, y+1] );
    }
    return neighbors;
}
