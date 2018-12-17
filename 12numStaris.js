function countWays( N, X ) {
    let ret = [];

    ret[0] = 1;
    ret[1] = 1;
    for ( let i = 2; i < X && i < N; i++ ) {
        ret[i] = countWays( N - 1, X );
    }

    return ret;
}
