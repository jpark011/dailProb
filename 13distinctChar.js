function distinctChars( s, k ) {
    let maxLen = Number.MIN_VALUE;
    for ( let i = 0; i < s.length; i++ ) {
        let curChars = new Set();
        let j;
        for ( j = i; j < s.length; j++ ) {
            curChars.add( s[j] );
            if ( k < curChars.size ) {
                break;
            }
        }
        if ( maxLen < (j - i) ) {
            maxLen = j - i;
        }
    }
    return maxLen;
}
