function justify( los, k ) {
    let ret = [];
    let tempS = [];

    for ( let s of los ) {
        if ( !canFit( k, tempS, s ) ) {
            ret.push(format(tempS, k) );
            tempS = [];
        }
        tempS.push( s );
    }
    ret.push( format(tempS, k) );
    return ret;
}

function canFit( k, los, s ) {
    return totalLength(los) + s.length <= k;
}

function format( los, k ) {
    let totalLen = totalLength( los ) - 1;
    let spaceLeft = (k - totalLen) / los.length;
    let str = '';
    
    for ( let s of los ) {
        str += s;
        for ( let i = 0; i < spaceLeft; i++ ) {
            str += ' ';
        }
    }

    return str;
}

function totalLength( los ) {
    let totalStrLen = los.length;
    
    for ( let ss of los ) {
        totalStrLen += ss.length;
    }
    return totalStrLen;
}