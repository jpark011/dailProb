class BitArray {
    arr;

    init(size) {
        console.assert(0 <= size);

        this.arr = new Array(size).fill(0);
    }

    set(i, val) {
        console.assert(0 <= i && i < this.arr.length);
        console.assert(val === 0 || val === 1);

        this.arr[i] = val;
    }

    get(i) {
        console.assert(0 <= i && i < this.arr.length);
        return this.arr[i];
    }
}

ba = new BitArray();
ba.init(10);
ba.get(0);
ba.set(0, 1);
ba.get(0);