class Trie {
    constructor() {
        this.children = [];
        this.isEnd = false;
    }

    insert( str ) {
        let curTrie = this;
        for ( const c of str ) {
            if ( curTrie.children[c] === undefined ) {
                curTrie.children[c] = new Trie();
            }
            curTrie = curTrie.children[c];
        }
        curTrie.isEnd = true;
    }

    search( str ) {
        let curTrie = this;
        for ( const c of str ) {
            if ( curTrie.children[c] === undefined ) {
                return false;
            }
            curTrie = curTrie.children[c];
        }
        return curTrie.isEnd;
    }
}

function getWords( dicWords, str ) {
    const dictionary = new Trie();
    for ( const word of dicWords ) {
        dictionary.insert(word);
    }

    while ( str.length ) {
        let substr = '';
        let found = false;
        for ( const i in str ) {
            substr += str[i];
            if ( dictionary.search(substr) ) {
                str = str.substr( i + 1 );
                found = true;
            }
        }
        if ( !found ) throw 1;
    }
}
