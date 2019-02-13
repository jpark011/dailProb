// Given a list of integers, return the largest product that can be made by multiplying any three integers.

// For example, if the list is[-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

// You can assume the list has at least three integers.

function largestProduct(list) {
    let max = Number.MIN_VALUE;
    let ret = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            for (let k = j + 1; k < list.length; k++) {
                if ( max < list[i] * list[j] * list[k] ) {
                    ret = [list[i], list[j], list[k]];
                }
            }
        }
    }
    return ret;
}