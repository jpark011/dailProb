function coinChange(total, coins) {
    let numCoins = new Array(total + 1).fill(Number.POSITIVE_INFINITY);

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <= total) {
            numCoins[coins[i]] = 1;
        }
    }

    for (let i = 1; i <= total; i++) {
        if (numCoins[i] != 1) {
            let minNumCoin = Number.POSITIVE_INFINITY
            for (let j = 0; j < coins.length; j++) {
                if (coins[j] < i) {
                    minNumCoin = Math.min(numCoins[i - coins[j]], minNumCoin);
                }
            }
            numCoins[i] = minNumCoin + 1;
        }
    }

    return numCoins[total];
}
console.log(
    coinChange(15, [5, 8])
);

