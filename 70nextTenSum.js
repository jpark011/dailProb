// A number is considered perfect if its digits sum up to exactly 10.

// Given a positive integer n, return the n-th perfect number.

// For example, given 1, you should return 19. Given 2, you should return 28.

function nextTenSum(n) {
    while (true) {
        if ( isDigitSum(n, 10) ) {
            return n;
        }
        n++;
    }
}

function isDigitSum(n, sum) {
    let firstDigit = n % 10;
    if (firstDigit === sum) {
        return true;
    } else if (n == 0 || sum < firstDigit) {
        return false;
    } else {
        return isDigitSum(Math.floor(n / 10), sum - firstDigit);
    }
}
