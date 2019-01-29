// Sudoku is a puzzle where you're given a partially-filled 9 by 9 grid with digits. The objective is to fill the grid with the constraint that every row, column, and box (3 by 3 subgrid) must contain all of the digits from 1 to 9.

function solve( board ) {
    // construct nonet starting point
    const nonet = [];
    const boardSets = [];
    for ( let i = 0; i < 3; i++ ) {
        for ( let j = 0; j < 3; j ++ ) {
            nonet.push( [ i * 3, j * 3 ] );
            const nonetSets = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            
            // remove from sets
            for ( let x = i; x < i + 3; x++ ) {
                for ( let y = j; y < j + 3; y++ ) {
                    if ( board[x][y] !== null ) {
                        nonetSets[i * 3 + j].delete( board[x][y] );
                    }
                }
            }

            // construct set for each cell
            for ( let x = i * 3; x < i * 3 + 3; x++ ) {
                for ( let y = j * 3; y < j * 3 + 3; y++ ) {
                    if ( board[x][y] === null ) {
                        board[x][y] = new Set([...nonetSets]);
                    }
                }
            }
        }
    }

    
    // until everything is solved
    while ( !isSolved(board) ) {
    // iterate through each nonet
    // and iterate through each cell in a nonet
        for ( let k = 0; k < 9; k++ ) {
            let startI = nonet[k][0];
            let startJ = nonet[k][1];

            // go rows & cols
            for ( let i = startI; i < startI + 3; i++ ) {
                for ( let j = startJ; i < startJ + 3; j++ ) {
                    // skip if this block is filled
                    if ( Number.isInteger(board[i][j]) ) continue;
                    for ( let l = 0; l < 9; l++ ) {
                        if (Number.isInteger(board[i][l])) {
                            board[i][j].delete(board[i][l]);
                        }   
                        if (Number.isInteger(board[l][j])) {
                            board[i][j].delete(board[l][j]);
                        }   
                    }
                    
                    // fill if set has 1 value
                    if ( board[i][j].size === 1 ) {
                        board[i][j] = [...board[i][j]][0];
                        delete board[i][j];
                    }
                }
            }
        }
    }
}

function isSolved( board ) {
    for ( let i = 0; i < 3; i++ ) {
        for ( let j = 0; j < 3; j ++ ) {
            if ( board[i][j] === null ) return false;
        }
    }
    return true;
}