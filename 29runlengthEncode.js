function runlengthEncode( str ) {
    let encoded = '';
    let prevC;
    let cCnt = 0;

    for ( let c of str ) {
        if ( !prevC ) prevC = c;
        if ( prevC === c ) {
            cCnt++;
        } else {
            encoded += cCnt + prevC;
            prevC = c;
            cCnt = 1;
        }
    }
    encoded += cCnt + prevC;
    return encoded;
}
