// An sorted array of integers was rotated an unknown number of times.

// Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

// For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

// You can assume all the integers in the array are unique.

function binarySearch( arr, l, h, k ) {
    if ( h < l ) {
        return null;
    }
    if ( arr[l] === k ) {
        return l;
    }
    if ( arr[h] === k ) {
        return h;
    }
    let m = Math.floor( (l + h) / 2 );

    if ( arr[m] < k ) {
        return binarySearch( arr, m + 1, h, k );
    } else {
        return binarySearch(arr, l, m, k);
    }
}

function findPivot( arr, low, high ) {
    if ( high < low ) 
        return null;
    if ( high === low ) 
        return low;
    
    let mid = Math.floor( (low + high) / 2 );

    if ( arr[mid + 1] < arr[mid] ) 
        return mid;

    if ( arr[mid] < arr[mid - 1] ) 
        return mid - 1;
        
    if ( arr[low] < arr[mid] )
        return findPivot( arr, mid + 1, high );
    else 
        return findPivot( arr, low, mid - 1 );
}

function findInRotatedArray( arr, k ) {
    let pivot = findPivot( arr, 0, arr.length - 1 );
    if ( pivot === null ) {
        return binarySearch( arr, 0, arr.length - 1 );
    } 

    if ( arr[0] <= k ) {
        return binarySearch( arr, 0, pivot );
    } else {
        return binarySearch( arr, pivot + 1, arr.length - 1 );
    }
}