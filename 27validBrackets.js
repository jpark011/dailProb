function checkValid( str ) {
    const bracketMap = new Map( [
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ] );

    let checkStack = [];

    for ( let c of str ) {
        if ( isClosing(c) ) {
            let lastC = checkStack.pop();
            if ( lastC === undefined || brackMap[lastC] !== c ) {
                return false;
            }
        } else {
            checkStack.push(c);
        }
    }
    return checkStack.length === 0;
}

function isClosing( c ) {
    return c === '}' || ')' || ']';
}
