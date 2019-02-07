// Implement integer exponentiation.That is, implement the pow(x, y) function, where x and y are integers and returns x ^ y.

// Do this faster than the naive method of repeated multiplication.

// For example, pow(2, 10) should return 1024.
function exp(b, e) {
    if (e === 0) {
        return 1;
    }
    let half = exp(b, Math.floor(e/2));

    return (e & 1)? b * half * half : half * half;
}
