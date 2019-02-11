// Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0). You do not know the bias of the coin.

// Write a function to simulate an unbiased coin toss.

function fairCoin() {
    const first = Math.round(toss_biased());    
    const second = Math.round(toss_biased());
    
    if ( first === 0 && second === 1 ) {
        return 1;
    } else if ( first === 1 && second === 0 ) {
        return 0;
    } else {
        return fairCoin();
    }
}
