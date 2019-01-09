function makePalindrome( str, l = 0, h = str.length - 1 ) {
    
    if ( h + 1 === l ) {
        return '';
    } else if ( l === h ) {
        return str[l];
    }

    if ( str[l] === str[h] ) {
        return str[l] + makePalindrome( str, l + 1, h - 1 ) + str[h];
    } else {
        let front = str[l] + makePalindrome( str, l+1, h ) + str[l];
        let back = str[h] + makePalindrome( str, l, h-1 ) + str[h];

        return comparePalindromes( front, back );
    }
}

function comparePalindromes( str1, str2 ) {
    if ( str1.length === str2.length ) {
        return ( str1 < str2 )? str1 : str2;
    } else {
        return ( str1.length < str2.length )? str1 : str2;
    }
}
