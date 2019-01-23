// Given a string, find the longest palindromic contiguous substring.If there are more than one with the maximum length, return any one.

// For example, the longest palindromic substring of "aabcdcb" is "bcdcb".The longest palindromic substring of "bananas" is "anana".

function longestPalindrom( str ) {
    let isPalindrom = true;
    let len = str.length;
    for ( let i = 0; i <= len / 2; i++ ) {
        if ( str[i] === str[len - i - 1] ) {
            isPalindrom = false;
            break;
        }
    }

    if ( isPalindrom ) {
        return str;
    }

    let popFront = longestPalindrom( str.slice(1, len) );
    let popBack = longestPalindrom( str.slice(0, len - 1) );

    return (popFront.length < popBack.length)? popBack : popFront;
}
