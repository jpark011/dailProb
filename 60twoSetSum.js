// Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

// For example, given the multiset { 15, 5, 20, 10, 35, 15, 10 }, it would return true, since we can split it up into { 15, 5, 10, 15, 10 } and { 20, 35 }, which both add up to 55.

// Given the multiset { 15, 5, 20, 10, 35 }, it would return false, since we can't split it up into two subsets that add up to the same sum.
function twoSetSum(arr) {
    let sum = 0;
    arr.forEach((val) => sum += val);
    if ( sum & 1 ) {
        return false;
    }

    return subsetSum(arr, arr.length, sum/2);
}

function subsetSum(arr, n, k) {
    if (k === 0 ) {
        return true;
    } 

    if (n === 0 && k !== 0 ) {
        return false;
    }

    return subsetSum(arr, n - 1, k) || subsetSum(arr, n - 1, k - arr[n - 1]);
}