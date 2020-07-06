function isOneToOne(word1, word2) {
    for (let i of word1) {
        word2 = word2.replace(i, '');
    }

    return word2.length === 0;
}

console.log(isOneToOne('abbc', 'cbba'));