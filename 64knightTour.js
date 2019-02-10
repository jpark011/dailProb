// A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

// Given N, write a function to return the number of knight's tours on an N by N chessboard.

function knightTour(N) {
    let board = [];
    for ( let i = 0; i < N; i++ ) {
        board.push(new Array(N));
    }
    // run BFS on board
}

function isEmpty(board) {
    for (let row of board) {
        for (let e of row) {
            if (e === undefined) {
                return true;
            }
        }
    }
    return false;
}