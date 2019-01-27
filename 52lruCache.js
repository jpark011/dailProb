// Implement an LRU(Least Recently Used) cache.It should be able to be initialized with a cache size n, and contain the following methods:

// set(key, value): sets key to value.If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
//     get(key): gets the value at key.If no such key exists, return null.
// Each operation should run in O(1) time.

class LRUElement {
    constructor(isUsed=false, value=undefined) {
        this.isUsed = isUsed;
        this.value = value;
    }
}

class LRUCache {
    constructor (n) {
        this.n = n;
        this.cacheMap = new Array(n);
        initCacheMap();
        this.hashMap = new Map();
        this.numData = 0;
        this.clockPtr = 0;
    }

    set(key, value) {
        let putIndex = this.numData;
        if ( this.n <= putIndex ) {
            putIndex = getLRU();
        }
        this.cacheMap[putIndex].value = value;
        this.cacheMap[getIndex].isUsed = true;
        this.hashMap.set( key, putIndex );
    }

    get(key) {
        let getIndex = this.hashMap.get(key);
        this.cacheMap[getIndex].isUsed = true;
        return this.cacheMap[getIndex].value;
    }

    initCacheMap() {
        for ( let i = 0; i < this.n; i++ ) {
            this.cacheMap[i] = new LRUElement();
        }
    }

    getLRU() {
        while ( !this.cacheMap[clockPtr].isUsed ) {
            this.cacheMap[clockPtr].isUsed = false;
            this.clockPtr++;
            this.clockPtr %= this.n;
        }
    }
}
