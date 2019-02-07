// There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.

// For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:

// Right, then down
// Down, then right
// Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.
function numPaths(M, n, m) {
    DFS(M, n, m, 0, 0);
    return M[n - 1][m - 1];
}

function DFS(M, n, m, x, y) {
    M[x][y]++;
    if ( x + 1 < n ) {
        DFS(M, n, m, x + 1, y);
    }
    if ( y + 1 < m ) {
        DFS(M, n, m, x, y + 1);
    }
}
