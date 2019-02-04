// Given a string s and an integer k, break up the string into multiple texts such that each text has a length of k or less.You must break it up so that words don't break across lines. If there's no way to break the text up, then return null.

// You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

// For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"].No string in the list has a length of more than 10.

function breakText(str, k) {
    let words = str.split(' ');
    let sofar = '';
    let ret = [];

    while ( 0 < words.length ) {
        let word = words.pop();

        if ( sofar.length + word.length < k ) {
            sofar += ' ' + word;
        } else {
            ret.push(sofar);
            sofar = word;
        }
    }

    return ret;
}