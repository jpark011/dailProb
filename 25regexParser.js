function regexMatch( regex, str ) {
    if ( regex.length <= 0 && 0 < str.length )
        return false;

    let firstMatch = regex[0] === '.' || regex[0] === str[0];

    if ( 1 < regex.length || regex[1] === '*' ) {
        return ( firstMatch && regexMatch( regex, str.substr(1) ) ) || 
            regexMatch(regex.substr(2), str);
    } else {
        return firstMatch && regexMatch( regex.substr(1), str.substr(1) );    
    }
}
