// Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

// It should run in O(N) time.

// Hint: Make sure each one of the 52! permutations of the deck is equally likely.

function shuffle( deck ) {
    for ( let i = 0; i < deck.length; i++ ) {
        let j = rand(deck.length) - 1;
        swap( deck, i, j );
    }
    return deck;
}

function swap( list, src, dest ) {
    let tmp = list[src];
    list[src] = list[dest];
    list[dest] = tmp;
}
