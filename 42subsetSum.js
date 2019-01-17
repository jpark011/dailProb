// Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k.If such a subset cannot be made, then return null.

// Integers can appear more than once in the list.You may assume all numbers in the list are positive.

// For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

function subsetSum( list, k ) {
    if ( list.length === 0 ) {
        if ( k === 0 ) return 1;
        else return 0;
    } else if ( k < 0 ) {
        return 0;
    }
    
    let notUsed = subsetSum(list.slice(1, list.length ), k );
    let used = subsetSum( list.slice( 1, list.length ), k - list[0] );

    return notUsed + used;

}