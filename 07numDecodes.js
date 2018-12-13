let alphaMap = new Map();

for ( let c = 'a'; c <= 'z'; c = String.fromCharCode(c.charCodeAt() + 1) ) {
    alphaMap.set(c, c.charCodeAt() - 'a'.charCodeAt() + 1 );
}

function numDecodes( string ) {
    let count = 0;
    if ( 1 < string.length ) {
        let twoDigit = Number.parseInt( string.substr(0, 2) );
        if ( twoDigit <= alphaMap['z'] ) {
            count++;
            count += numDecodes( string.slice(2) );
        }
    } 
    
    if ( 0 < string.length ) {
        let oneDigit = Number.parseInt( string.substr(0, 1) );
        if ( 0 < oneDigit ) {
            count++;
            count += numDecodes( string.slice(1) );
        }
    }

    return count;
}