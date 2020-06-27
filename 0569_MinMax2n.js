function findMinMax(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;

    if (arr.length == 1) {
        min = arr[0];
        max = arr[0];
    }

    for (let i = 0; i < arr.length; i += 2) {
        let isIncreasing = arr[i] < arr[i + 1];
        let smaller = isIncreasing? arr[i] : arr[i + 1];
        let greater = isIncreasing? arr[i + 1] : arr[i];

        min = Math.min(min, smaller);
        max = Math.max(max, greater);
    }

    return {
        min,
        max
    };
}

console.log(findMinMax([3, 2, 1, -5]));