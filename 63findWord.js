// Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left - to - right, or up - to - down.

// For example, given the following matrix:

// [['F', 'A', 'C', 'I'],
// ['O', 'B', 'Q', 'P'],
// ['A', 'N', 'O', 'B'],
// ['M', 'A', 'S', 'S']]
// and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.
function findWord(M, word) {
    const n = M.length;
    const m = M[0].length;

    for ( let i = 0; i < n; i++ ) {
        for ( let j = 0; j < m; j++ ) {
            if ( M[i][j] === word[0] ) {
                for ( let k = 1; k <= word.length; k++ ) {
                    if ( i + k <= n && k === word.length ) {
                        return true;
                    }
                    if ( i + k < n && M[i + k][j] !== word[k] ) {
                        break;
                    }
                }

                for ( let k = 1; k <= word.length; k++ ) {
                    if ( j + k <= m && k === word.length ) {
                        return true;
                    }
                    if ( j + k < m && M[i][j + k] !== word[k] ) {
                        break;
                    }
                }
            }
        }
    }

    return false;
}