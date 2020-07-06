function isWordsCircle(arr) {
    const startCharMap = new Map();
    const endCharMap = new Map();
    
    for (let word of arr) {
        const startChar = word[0];
        const endChar = word[word.length - 1];

        const startCharCount = startCharMap.get(startChar);
        const endCharCount = endCharMap.get(endChar);

        startCharMap.set(startChar, (startCharCount)? startCharCount + 1 : 1)
        endCharMap.set(endChar, (endCharCount)? endCharCount + 1 : 1)
    }

    if (startCharMap.length !== endCharMap.length) {
        return false;
    }

    for (let [char, count] of startCharMap.entries()) {
        if (!endCharMap.get(char) || count !== endCharMap.get(char)) {
            return false;
        }
    }
    return true;
}

console.log(isWordsCircle(['123', '33211', '12222', '2222']));