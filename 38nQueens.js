function nQueens( board, N, col = 0 ) {
    if ( N <= col ) {
        return 1;
    }
    // iterate row
    for ( let i = 0; i < N; i++ ) {
        if ( isSafe( board, N, i, col ) ) {
            if ( nQueens( board, N, col + 1  === 1) ) {
                return 1;
            }
        }
    }
}

function isSafe( board, N, row, col ) {
    for ( let i = 0; i < col; i++ ) {
        if ( board[row][i] ) {
            return false;
        }
    }

    for ( let i = col + 1; i < N; i++ ) {
        if ( board[row][i] ) {
            return false;
        }
    }
    
    for ( let i = col - 1, j = row - 1; 0 <= i && 0 <= j; i--, j-- ) {
        if ( board[j][i] ) {
            return false;
        }
    }

    for ( let i = col + 1, j = row + 1; i < N && j < N; i++, j++ ) {
        if ( board[j][i] ) {
            return false;
        }
    }
    return true;
}