function intJump(n) {
    const path = [0];
    let sum = 0;
    let isNegative = false;

    if (n < 0) {
        isNegative = true;
        n = Math.abs(n);
    }

    while (sum < n || (sum - n) % 2 !== 0 ) {
        path.push(path.length);
        sum += path[path.length - 1];
        // console.log(...path);
    }

    if (n < sum) {
        const index = (sum - n) / 2;
        path[index] *= -1;
    }

    return path
        .map((val) => isNegative && val !== 0? val * -1 : val);
}

console.log(...intJump(3));
console.log(...intJump(5));
console.log(...intJump(7));
console.log(...intJump(10));
console.log(...intJump(-3));
console.log(...intJump(-5));
console.log(...intJump(-7));
console.log(...intJump(-10));