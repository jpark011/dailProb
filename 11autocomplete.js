class Trie {
    constructor() {
        this.nodes = new Map();
    }

    insert( word ) {
        if ( !word.length ) {
            return;
        }
        let char = word[0];
        if ( !this.nodes[char] ) {
            this.nodes[char] = new TrieNode(char, this);
        }
        this.nodes[char].insert( word.substr(1) );
    }

    search( word ) {
        if ( !word || !this.nodes[word[0]] ) {
            return null;
        }
        return this.nodes[word[0]].search( word.substr(1), '' );
    }
};

class TrieNode {
    constructor( char, parent ) {
        this.char = char;
        this.parent = parent;
        this.children = new Map();
    }
    
    insert( word ) {
        if ( !word.length ) {
            return;
        }
    
        let next = word[0];
        if ( !this.children[next] ) {
            this.children[next] = new TrieNode(next, this);
        }
        this.children[next].insert(word.substr(1));
    }

    search( word, ret ) {
        ret += this.char;
        if ( !word && !this.children.size ) {
            return [ret];
        } else if ( !word ) {
            let arr = [];
            this.children.forEach( (val, key) => {
                arr.concat( val.search( word, ret ) );
            } );
            return arr;
        } else {
            return [];
        }
    }
}

let words = new Set( ['deer', 'dog', 'deal'] );
let trie = new Trie();

words.forEach( ( val ) => {
    trie.insert(val);
} );

