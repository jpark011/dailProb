// We can determine how "out of order" an array A is by counting the number of inversions it has.Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j.That is, a smaller element appears after a larger element.

// Given an array, count the number of inversions it has.Do this faster than O(N ^ 2) time.

// You may assume each element in the array is distinct.

// For example, a sorted list has zero inversions.The array[2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and(4, 3).The array[5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.

// class BST {
//     constructor ( data ) {
//         this.data = data;
//         this.left = null;
//         this.numLeft = 0;
//         this.right = null;
//         this.numRight = 0;
//     }

//     insert( val ) {
//         if ( this.data < val ) {
//             if ( this.right === null ) {
//                 this.right = new BST(val);
//             } else {
//                 this.right.insert(val);
//             }
//             this.numRight++;
//         } else {
//             if ( this.left === null ) {
//                 this.left = new BST(val);
//             } else {
//                 this.left.insert(val);
//             }
//             this.numLeft++;

//         }
//     }

//     findAndReturnNums( data ) {
//         if ( this.data === data ) {
//             return {
//                 left: this.numLeft,
//                 right: this.numRight
//             };
//         } else if ( this.data < data ) {
//             return this.right.findAndReturnNums(data);
//         } else {
//             return this.left.findAndReturnNums(data);
//         }
//     }
// }

function numInversions( list ) {
    const l = list.length;
    if ( l === 1 ) {
        return 0;
    }

    const left = numInversions( list.slice(0, l/2 ));
    const right = numInversions( list.slice(l/2, l ));
    const split = countSplit(list);

    return left + right + split;
}

function countSplit( list ) {
    const l = list.length;
    const m = Math.floor(l / 2);
    let i = 0;
    let j = m;
    let numInv = 0;

    for ( let k = 0; k < l; k++ ) {
        if ( m <= i || l <= j ) break;
        if ( list[i] < list[j] ) {
            numInv += m - i;
            j++;
        } else {
            i++
        }
    }
    return numInv;
}
