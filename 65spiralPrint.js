// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

// For example, given the following matrix:

// [[1,  2,  3,  4,  5],
//  [6,  7,  8,  9,  10],
//  [11, 12, 13, 14, 15],
//  [16, 17, 18, 19, 20]]
// You should print out the following:

// 1
// 2
// 3
// 4
// 5
// 10
// 15
// 20
// 19
// 18
// 17
// 16
// 11
// 6
// 7
// 8
// 9
// 14
// 13
// 12
function* spiralPrinter(matrix, N, M) {
    let inc = 1;
    let i = 0;
    let j = 0;
    while ( true ) {
        for ( ; 0 <= j && j < M; j += inc ) {
            yield matrix[i][j];
        }
        j--;
        i += inc;
        for (; 0 <= i && i < N; i += inc ) {
            yield matrix[i][j];
        }
        N--;
        M--;
        if ( N <=0 || M <= 0 ) break;
        inc *= -1;
        i--;
        j += inc;
    }
}
