function nextPermutation(digits) {
    loop:
    for (let i = digits.length - 1; 0 <= i; i--) {
        for (let j = i - 1; 0 <= j; j--) {
            if (digits[j] < digits[i]) {
                let temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
                break loop;
            }
        }
    }
    return digits;
}

console.log(nextPermutation([2, 8, 9, 1]));