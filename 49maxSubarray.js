// Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

// For example, given the array[34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

// Given the array[-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

// Do this in O(N) time.
function maxSubarray( list ) {
    if ( list.length === 0 ) {
        return 0;
    } else if ( list.length === 1 ) {
        return list[0];
    }

    let m = list.length / 2;
    let left = maxSubarray( list.slice(0, m) );
    let right = maxSubarray( list.slice(m + 1) );
    let cross = maxCross(list, m);
    
    return Math.max(left, right, cross)
}

function maxCross( list, m ) {
    let sum = 0;
    let leftSum = Number.MIN_VALUE;
    for ( let i = m; 0 <= i; i-- ) {
        sum += list[i];
        if ( leftSum < sum ) {
            leftSum = sum;
        }
    }

    sum = 0;
    let rightSum = Number.MIN_VALUE;
    for ( let i = m + 1; i < list.length; i++ ) {
        sum += list[i];
        if ( rightSum < sum ) {
            rightSum = sum;
        }
    }

    return leftSum + rightSum;
}