// Implement a URL shortener with the following methods:

// shorten(url), which shortens the url into a six - character alphanumeric string, such as zLg6wl.
//     restore(short), which expands the shortened string into the original url.If no such shortened string exists, return null.
//         Hint: What if we enter the same URL twice ?
const DB = new Map();
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const BASE = ALPHABET.length;

function shorten(url) {
    let random = 1000 + Math.random() * 1000;
    DB.set(random, url);

    let ret = [];
    while ( 0 < random ) {
        ret.push( ALPHABET[ random % BASE ] );
        random /= BASE;
    }
    return ret.join('');
}

function restore(short) {
    let key = 0;

    for ( let i = 0; i < short.length; i++ ) {
        key += Math.pow(BASE, i) * ALPHABET.indexOf(short[length - i - 1]);
    }
    let ret = DB.get(key);
    return ret === undefined? null : ret;
}
